/* eslint-disable @typescript-eslint/restrict-template-expressions */
import config from "config";
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import TagService from "@services/configuration/TagService";
import { logger } from "@shared/Logger";
import { int, QueryResult } from "neo4j-driver";
import { DemeterActions, FrameworkAssistant, IFrameworkAssistant } from "./Assistant";
import fs from "fs";
import { uuidv4 } from "@utils/utils";
import LevelService from "@services/imaging/LevelService";
import ObjectUtils from "@utils/Imaging/ObjectUtils";

export class FrameworkAssistantManager {
  private static INSTANCE: FrameworkAssistantManager;

  private static MIGRATION_FLAG = "ModifiedTaxonomy";
  private static RESOURCE_DIR = "serialization/";
  private static ASSISTANTS_FILE = "assistants.json";

  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  private tagService: TagService = new TagService();

  private levelTag: string;
  private moduleTag: string;
  private architectureTag: string;

  private artemisDetectionProperty: string;
  private artemisCategoryProperty: string;
  private artemisNameProperty: string;
  private artemisTaxonomyProperty: string;

  private assistants: FrameworkAssistant[];

  /**
   * Singleton, loading the Assistant file // Creating it
   */
  private constructor() {
    this.assistants = [];
    this.fetchResources();

    const filePath = FrameworkAssistantManager.RESOURCE_DIR + FrameworkAssistantManager.ASSISTANTS_FILE;

    // Import the assistants
    if (!fs.existsSync(FrameworkAssistantManager.RESOURCE_DIR)) {
      fs.mkdirSync(FrameworkAssistantManager.RESOURCE_DIR);
    }

    //Create file if not exists
    if (!fs.existsSync(filePath)) {
      fs.appendFileSync(filePath, "{}");
    }
    // Load assistants from it
    this.assistants = [];
    try {
      const jsonContent: IFrameworkAssistant[] = JSON.parse(fs.readFileSync(filePath, "utf8"));
      jsonContent.forEach(x => {
        this.assistants.push(FrameworkAssistant.fromJson(x));
      });
    } catch (err) {
      logger.error("Failed to load the Assistant file.", err);
    }

    //
    this.iterateOverAssistants();
  }

  public static getInstance() {
    if (FrameworkAssistantManager.INSTANCE == null) {
      FrameworkAssistantManager.INSTANCE = new FrameworkAssistantManager();
    }

    return FrameworkAssistantManager.INSTANCE;
  }

  public getAssistants(): FrameworkAssistant[] {
    return this.assistants;
  }

  /** Tag related function */

  public async getDemeterLevelTag(): Promise<string> {
    return await this.tagService.getCustomLevelTag();
  }

  /** Framework property */

  public async getDemeterArchitectureTag(): Promise<string> {
    return await this.tagService.getCustomArchitectureTag();
  }

  public async getDemeterModuleTag(): Promise<string> {
    return await this.tagService.getCustomModuleTag();
  }

  /** Apply tags on the application ( Remove present tags and ignore nodes already under their groups) */

  /**
   * Get the property of the Artemis Category on the nodes
   */
  public async getCategoryProperty(): Promise<string> {
    const req = "CALL artemis.api.configuration.get.category.property()";
    const res: QueryResult = await this.neo4jAl.execute(req);

    if (res.records.length == 0) throw new Error("Failed to get Artemis node category property");

    return String(res.records[0].get(0));
  }

  /**
   * Get the property of the Artemis Detection on the nodes
   */
  public async getDetectionProperty(): Promise<string> {
    const req = "CALL artemis.api.configuration.get.detection.property()";
    const res: QueryResult = await this.neo4jAl.execute(req);

    if (res.records.length == 0) throw new Error("Failed to get Artemis node detection property");

    return String(res.records[0].get(0));
  }

  /**
   * Get the property of the Artemis Detection on the nodes
   */
  public async getTaxonomyProperty(): Promise<string> {
    const req = "CALL artemis.api.configuration.get.taxonomy.property()";
    const res: QueryResult = await this.neo4jAl.execute(req);

    if (res.records.length == 0) throw new Error("Failed to get Artemis node taxonomy property");

    return String(res.records[0].get(0));
  }

  public async getNameProperty(): Promise<string> {
    const req = "CALL artemis.api.configuration.get.name.property()";
    const res: QueryResult = await this.neo4jAl.execute(req);

    if (res.records.length == 0) throw new Error("Failed to get Artemis node name property");

    return String(res.records[0].get(0));
  }

  /**
   * Apply tags on levels
   * @param category Category to  extract
   */
  public async applyLevelTagOnObjects(category: string) {
    const levelService = new LevelService();

    logger.info("DEBUG : Launching the framework manager using Taxonomy");

    const params = { tag: this.levelTag, category: category };

    // Todo : Add verification  if already extracted ( cf: category )
    const req = `MATCH (obj:Object) 
      WHERE obj.${this.artemisCategoryProperty}=$category
      AND (  NOT EXISTS(obj.ModifiedTaxonomy) OR NOT obj.${this.artemisTaxonomyProperty}=obj.${FrameworkAssistantManager.MIGRATION_FLAG} ) 
      RETURN DISTINCT LABELS(obj) as labels, obj.${this.artemisTaxonomyProperty} as taxonomy, COLLECT(DISTINCT ID(obj)) as idList`;

    const res: QueryResult = await this.neo4jAl.executeWithParameters(req, params);
    for (const rec of res.records) {
      // Get application name
      const labels = rec.get("labels");
      if (!Array.isArray(labels) || labels.length < 2) continue; // Skip invalid labels

      const idList = rec.get("idList"); // List of Id to be converted to number
      if (!Array.isArray(idList)) continue; // Skip invalid idList
      const objectIdList = idList.map(x => int(x).toNumber());

      const applicationName = labels.filter(x => x != "Object")[0];
      const taxonomy = String(rec.get("taxonomy"));
      try {
        // Verify that the taxonomy is correct // or assign a flag
        await levelService.groupWithTaxonomy(applicationName, taxonomy, objectIdList);

        // If the operation is a success apply the migration flag on it
        ObjectUtils.flagListObjects(applicationName, objectIdList, FrameworkAssistantManager.MIGRATION_FLAG, taxonomy);
      } catch (err) {
        logger.error("FRAMEWORK ASSISTANT :: Failed to group frameworks with level option. Property will be removed.");
        await this.resetArtemisProperty(idList);
      }
    }
  }

  /**
   * Apply tags on Modules
   * @param category Category to extract
   */
  public async applyModuleTagOnObjects(category: string) {
    // Check if the group doesn't exist before taking action
    const params = { tag: this.moduleTag + category, category: category };
    const req =
      "MATCH (obj:Object) WHERE obj.FrameworkDetection=$category AND NOT EXISTS { " +
      "(obj)<-[:Contains]-(m:Module) WHERE NOT m.Name CONTAINS $category " +
      "} SET obj.Tags = CASE WHEN obj.Tags IS NULL THEN [$tag] ELSE [ x IN obj.Tags WHERE NOT x CONTAINS $category ] + $tag END RETURN COUNT(obj) as count;";
    const res: QueryResult = await this.neo4jAl.executeWithParameters(req, params);
    if (res.records.length > 0 && res.records[0].get("count") != 0) {
      logger.info(`The assistant regrouped ${res.records[0].get("count")} nodes under their module for category ${category}`);
    }
  }

  /**
   * Apply tags on Objects for the architecture / The name of the arhitecture view is the name of the category.
   * The objects having a relationship to the main subset will also be extracted
   * @param category Category to extract
   */
  public async applyArchitectureTagOnObjects(category: string) {
    // Check if the group doesn't exist before taking action
    const params = {
      tag: this.architectureTag,
      prefix: "Framework ",
      category: category,
    };
    const req = `
    MATCH (obj:Object) WHERE obj.FrameworkDetection=$category AND EXISTS(obj.ArtemisCategory)
    AND NOT EXISTS { 
      MATCH (obj)<-[:Contains]-(m:Subset)<-[]-(a:ArchiModel) 
      WHERE a.Name=$prefix+obj.FrameworkDetection AND m.Name=obj.ArtemisCategory 
      }
    SET obj.Tags = CASE WHEN obj.Tags IS NULL THEN [($tag + $prefix + obj.FrameworkDetection+"$"+obj.ArtemisCategory)] ELSE [ x IN obj.Tags WHERE NOT x CONTAINS obj.ArtemisCategory ] + ($tag + $prefix + obj.FrameworkDetection+"$"+obj.ArtemisCategory) END
    WITH obj as obj, COLLECT(obj) as allFlagged
    MATCH (obj)-[]-(other:Object) 
    WHERE NOT other in allFlagged 
    AND NOT EXISTS {
      MATCH (other)<-[:Contains]-(m:Subset)<-[]-(a:ArchiModel) 
      WHERE a.Name=$prefix+obj.ArtemisCategory AND m.Name=other.Level 
      }
    SET other.Tags = CASE WHEN other.Tags IS NULL THEN [($tag + $prefix + obj.FrameworkDetection+"$"+other.Level)] ELSE [ x IN other.Tags WHERE NOT x CONTAINS other.Level  ] + ($tag + $prefix +obj.FrameworkDetection+ "$" +other.Level) END
    RETURN COUNT(DISTINCT obj) as countObj, COUNT(DISTINCT  other) as countOther;
    `;
    const res: QueryResult = await this.neo4jAl.executeWithParameters(req, params);
    if (res.records.length > 0 && res.records[0].get("countObj") != 0) {
      logger.info(
        `The assistant regrouped ${res.records[0].get("countObj")} nodes under their architecture for category ${category}.\n ${res.records[0].get(
          "countOther",
        )} will also be affected.`,
      );
    }
  }

  /**
   * Run a n assistant and execute the different actions
   * @param assistant Assistant to run
   */
  public async runAssistant(assistant: FrameworkAssistant) {
    if (!assistant.isRunning()) return; // Ignore if the assistants are not running

    await this.fetchResources();

    // Parse the actions and execute based on the category of the nodes
    const actions = assistant.getActions();
    for (let i = 0; i < actions.length; i++) {
      try {
        switch (actions[i]) {
          case DemeterActions.groupLevel:
            await this.applyLevelTagOnObjects(assistant.getCategory());
            break;
          case DemeterActions.groupModule:
            await this.applyModuleTagOnObjects(assistant.getCategory());
            break;
          case DemeterActions.groupArchitecture:
            await this.applyArchitectureTagOnObjects(assistant.getCategory());
            break;

          default:
            continue;
        }
      } catch (err) {
        logger.error(`Failed to execute the agent : [${actions[i]}].`, err);
      }
    }
  }

  /**
   * Parse the list of assistants and execute the actions
   */
  public async iterateOverAssistants() {
    try {
      for (let i = 0; i < this.assistants.length; i++) {
        try {
          await this.runAssistant(this.assistants[i]);
        } catch (err) {
          logger.error(`Failed to execute assistant [${this.assistants[i].serialize().category}]`);
        }
      }
    } catch (err) {
      logger.error("Failed to iterate over the assistants.", err);
    }

    const delay = Number(config.get("assistant.reload")) || 10000;
    const that = this;
    setTimeout(function() {
      that.iterateOverAssistants();
    }, delay);
  }

  /**
   * Add a new Assistant to the list
   * @param category Category concerned by the assistant
   * @param actions  Action to execute
   */
  public addAssistant(category: string, actions: DemeterActions[]): void {
    // Find a gap in the id or get the n + 1
    const uuid = uuidv4();
    const assistant = new FrameworkAssistant(uuid, category, actions);
    this.assistants.push(assistant);
    this.dumpAssistantList();
  }

  /**
   * Remove the assistant
   * @param id Id of the assistant to remove
   * @returns true if the assistant was removed successfully, false otherwise
   */
  public removeAssistant(id: string): void {
    this.assistants = this.assistants.filter(x => x.getId() != id);
    this.dumpAssistantList();
  }

  /**
   * Stop the assistant
   * @param id Id of the assistant to start
   * @returns true if the assistant was stopped successfully, false otherwise.
   */
  public stopAssistantById(id: string): boolean {
    const assistant = this.assistants.find(x => x.getId() === id);
    if (!assistant) return false;

    assistant.stop();
    return true;
  }

  /**
   * Start the assistant
   * @param id Id of the assistant to start
   * @returns true if the assistant was started successfully, false otherwise.
   */
  public starAssistantById(id: string): boolean {
    const assistant = this.assistants.find(x => x.getId() === id);
    if (!assistant) return false;

    assistant.start();
    return true;
  }

  /**
   * Get the list of framework categories available
   */
  public async getCategories(): Promise<string[]> {
    const req = "CALL artemis.api.configuration.get.detection.property.values()";
    const results: QueryResult = await this.neo4jAl.execute(req);

    const categoryNames: string[] = [];
    for (let i = 0; i < results.records.length; i++) {
      categoryNames.push(String(results.records[i].get(0)));
    }

    return categoryNames;
  }

  /**
   * Get the amiable actions of demeter
   */
  public getDemeterActions(): string[] {
    return Object.keys(DemeterActions);
  }

  /**
   * Reset the Artemis property on a list of nodes
   * @param idList List of nodes to reset
   */
  private async resetArtemisProperty(idList: number[]) {
    const request = `UNWIND $idList as id 
    MATCH (o:Object) WHERE ID(o)=id 
    REMOVE o.${this.artemisTaxonomyProperty}
    REMOVE o.${this.artemisCategoryProperty}
    RETURN COUNT(o) as removed`;

    try {
      const results = await this.neo4jAl.execute(request, { idList: idList });
      if (results.records.length > 0) {
        logger.info(`Artemis property removed on ${results.records[0].get("removed")} nodes.`);
      } else {
        logger.info(`Failed to remove Artemis on ${idList.length} nodes.`);
      }
    } catch (err) {
      logger.error(`Failed to delete the ${this.artemisTaxonomyProperty} property.`);
    }
  }

  /**
   * Check if all the external resources ( tags, property, etc.. ) are instantiated.
   */
  private async fetchResources() {
    try {
      // Populate the tags if not already the case
      if (!this.levelTag) this.levelTag = await this.getDemeterLevelTag();
      if (!this.moduleTag) this.moduleTag = await this.getDemeterModuleTag();
      if (!this.architectureTag) this.architectureTag = await this.getDemeterArchitectureTag();

      if (!this.artemisDetectionProperty) this.artemisDetectionProperty = await this.getCategoryProperty();
      if (!this.artemisCategoryProperty) this.artemisCategoryProperty = await this.getDetectionProperty();
      if (!this.artemisNameProperty) this.artemisNameProperty = await this.getNameProperty();
      if (!this.artemisTaxonomyProperty) this.artemisTaxonomyProperty = await this.getTaxonomyProperty();
    } catch (err) {
      logger.error("FRAMEWORK ASSISTANT :: Failed to fetch resources", err);
    }
  }

  private dumpAssistantList() {
    const filePath = FrameworkAssistantManager.RESOURCE_DIR + FrameworkAssistantManager.ASSISTANTS_FILE;

    try {
      // remove the file and dump the content

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      const data: IFrameworkAssistant[] = this.assistants.map(x => x.serialize());

      fs.writeFileSync(filePath, JSON.stringify(data));
    } catch (err) {
      logger.error("FRAMEWORK ASSISTANT ::  Failed to dump the assistants to their file.", err);
    }
  }
}
