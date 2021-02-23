import { Neo4JAccessLayer } from "@database/neo4jAccessLayer";
import { QueryResult } from "neo4j-driver";

const demeterActions = [
  "Group to level",
  "Group to module",
  "Group to Architecture"
]

export class ActionFrameworkAssistant {
  public category: string;
  public actions: string[];
}

export class FrameworkAssistantManager {
  private static INSTANCE : FrameworkAssistantManager;
  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  private assistants : ActionFrameworkAssistant[];

  public getAssistants() : ActionFrameworkAssistant[]{
    return this.assistants;
  }

  /**
   * Get the list of framework categories available
   */
  public async getCategories() : Promise<string[]> {
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
  public getDemeterActions() : string[] {
    return demeterActions;
  }

  private constructor() {
    this.assistants = [];
  }

  public static getInstance() {
    if(FrameworkAssistantManager.INSTANCE == null) {
      FrameworkAssistantManager.INSTANCE  = new FrameworkAssistantManager();
    }
    
    return FrameworkAssistantManager.INSTANCE;
  }
}