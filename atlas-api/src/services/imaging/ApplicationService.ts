/* eslint-disable @typescript-eslint/no-unsafe-call */
import { logger } from "@shared/Logger";
import { QueryResult } from "neo4j-driver";
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import HttpException from "@exceptions/HttpException";

import { ArtemisCandidates } from "@services/extensions/artemis/ArtemisCandidatesService";
import { ApplicationInsights } from "@interfaces/imaging/ApplicationInsights";

class ApplicationService {
  private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  /**
   * Get the version of Artemis
   */
  public async getApplications(): Promise<string[]> {
    try {
      const request = "MATCH (n:Application) RETURN n.Name as name ORDER BY name";

      const results: QueryResult = await this.neo4jAl.execute(request);

      const appNames: string[] = [];
      for (let i = 0; i < results.records.length; i++) {
        const singleRecord = results.records[i];
        const name = singleRecord.get("name");
        appNames.push(name);
      }

      return appNames;
    } catch (err) {
      logger.error("Failed to verify the installation of artemis...", err);
      throw new HttpException(500, "Internal error");
    }
  }

  /**
   * Get the version of Artemis
   */
  public async getApplicationsInsights(application: string): Promise<ApplicationInsights> {
    try {
      const ac = new ArtemisCandidates();
      const info = await ac.getCandidateInformation(application);

      if (info == null) throw new Error(`No application with name ${application} was found.`);

      const supportedLanguages = info.languages;
      let levels = [];
      let modules = [];
      let architectures = [];

      // Retrieve application infos
      const levelRequest = `MATCH (n:Level5:\`${application}\`) RETURN COLLECT(n.Name) as levels5;`;
      const levelRes = await this.neo4jAl.execute(levelRequest);
      if (levelRes.records && levelRes.records.length != 0) levels = levelRes.records[0].get("levels5");

      const moduleRequest = `MATCH (n:Module:\`${application}\`) RETURN COLLECT(n.Name) as modules;`;
      const moduleRes = await this.neo4jAl.execute(moduleRequest);
      if (moduleRes.records && moduleRes.records.length != 0) modules = moduleRes.records[0].get("modules");

      const architecturesRequest = `MATCH (n:ArchiModel:\`${application}\`) RETURN COLLECT(n.Name) as archiModels;`;
      const archiRes = await this.neo4jAl.execute(architecturesRequest);
      if (archiRes.records && archiRes.records.length != 0) architectures = archiRes.records[0].get("archiModels");

      return {
        name: application,
        levels5: levels,
        modules: modules,
        architectures: architectures,
        technologies: supportedLanguages,
      } as ApplicationInsights;
    } catch (err) {
      logger.error(`Failed to retrieve information about `, err);
      throw new HttpException(500, "Internal error");
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
