/* eslint-disable @typescript-eslint/no-unsafe-call */
import { wrapLogger } from "@shared/Logger";
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";

import { ApplicationInsights } from "@interfaces/imaging/ApplicationInsights";
import TechnologiesService from "@services/data/technologies/TechnologiesService";

class ApplicationService {
  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  private logger = wrapLogger("Application Service");

  /**
   * Get the list of the application on the server
   */
  public async getApplicationList(): Promise<string[]> {
    // Get the list of application
    const request = "MATCH (n:Application) RETURN COLLECT( n.Name ) as name ORDER BY name";
    const response = await this.neo4jAl.execute(request);

    if (response.records && response.records.length != 0) return response.records[0].get("name");
    else return [];
  }

  /**
   * Get the list of technologies
   * @param application Name of the application
   * @private
   */
  private async getTechnologies(application: string): Promise<string[]> {
    // Technology service
    const techService = TechnologiesService.getInstance();

    // Get the list of object type
    const request = `MATCH (o:Object:\`${application}\`) 
    WHERE EXISTS(o.Type) 
    RETURN COLLECT(DISTINCT o.Type) as types;`;

    const response = await this.neo4jAl.execute(request);

    let types: string[] = [];
    if (response.records && response.records.length != 0) types = response.records[0].get("types");
    else return [];

    // Compare the list of technologies to the binding
    return techService.getTechnologiesFromType(types);
  }

  /**
   * Get the list of levels 5
   * @param application Name of the application
   * @private
   */
  private async getLevels5(application: string): Promise<string[]> {
    const levelRequest = `MATCH (n:Level5:\`${application}\`) RETURN COLLECT(DISTINCT n.Name) as levels5;`;
    const levelRes = await this.neo4jAl.execute(levelRequest);

    if (levelRes.records && levelRes.records.length != 0) return levelRes.records[0].get("levels5");
    else return [];
  }

  /**
   * Get the list modules in the application
   * @param application Name of the application
   * @private
   */
  private async getModules(application: string): Promise<string[]> {
    const levelRequest = `MATCH (n:Module:\`${application}\`) RETURN COLLECT(DISTINCT n.Name) as modules;`;
    const levelRes = await this.neo4jAl.execute(levelRequest);

    if (levelRes.records && levelRes.records.length != 0) return levelRes.records[0].get("modules");
    else return [];
  }

  /**
   * Get the list architecture in the application
   * @param application Name of the application
   * @private
   */
  private async getArchitectures(application: string): Promise<string[]> {
    // Get the list of archimodels
    const architecturesRequest = `MATCH (n:ArchiModel:\`${application}\`) RETURN COLLECT(n.Name) as archiModels;`;
    const archiRes = await this.neo4jAl.execute(architecturesRequest);

    // Get results
    if (archiRes.records && archiRes.records.length != 0) return archiRes.records[0].get("archiModels");
    else return [];
  }

  /**
   * Get the application insights
   * @param app Name of the application
   */
  public async getApplicationInsights(app: string): Promise<ApplicationInsights> {
    try {
      return {
        name: app,
        technologies: await this.getTechnologies(app),
        levels5: await this.getLevels5(app),
        architectures: await this.getArchitectures(app),
        modules: await this.getModules(app),
      };
    } catch (err) {
      this.logger.error(`Failed to get the insights for application [${app}]`, err);
      throw new Error("Failed to get the application insights");
    }
  }

  /**
   * Get the list of application with insights on the server
   */
  public async getAllApplicationsInsights(): Promise<ApplicationInsights[]> {
      try {
        const applications = await this.getApplicationList();
        const insights: ApplicationInsights[] = [];

        for(const app of applications) {
          insights.push(await this.getApplicationInsights(app));
        }

        return insights;
      } catch (err) {
        this.logger.error("Failed to get the list of insights.");
        throw new Error("Failed to get the list of application insights");
      }
  }

  /**
   * Get the technologies (Level 4) in one application
   * @param application
   */
  public async getTechnology(application: string): Promise<string[]> {
    const req = `MATCH (l:\`${application}\`:Level4) RETURN DISTINCT l.Name as name`;
    const res = await this.neo4jAl.execute(req);

    const types: string[] = [];
    if (!res.records) return types;

    for (let i = 0; i < res.records.length; i++) {
      const type = String(res.records[i].get("name"));
      types.push(type);
    }

    return types;
  }

  /**
   * Get the Level5 in one application
   * @param application Name of the application
   * @param numLevel Level depth
   */
  public async getLevels(application: string, numLevel: number): Promise<string[]> {
    const req = `MATCH (l:\`${application}\`:Level${numLevel}) RETURN DISTINCT l.Name as name`;
    const res = await this.neo4jAl.execute(req);

    const types: string[] = [];
    if (!res.records) return types;

    for (let i = 0; i < res.records.length; i++) {
      const type = String(res.records[i].get("name"));
      types.push(type);
    }

    return types;
  }
}

export default ApplicationService;
