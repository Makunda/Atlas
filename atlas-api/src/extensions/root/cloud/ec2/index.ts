/* eslint-disable max-len */
import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";
import LevelDocumentNode from "@entities/Imaging/Documents/LevelDocumentNode";
import { int } from "neo4j-driver";
import Extension from "@extensions/Extension";
import SDKFramework from "@extensions/SDKFramework";
import SDKTechnology from "@extensions/SDKTechnology";
import { Logger } from "winston";

export default class EC2 extends Extension {
  private id = "7690f8ce-c73e-43ee-be88-808ea280c995";
  private name = "EC2 Cloud service";
  private description = "Secure and resizable compute capacity in the cloud. Launch applications when needed without upfront commitments";
  private fullDescription = `Secure and resizable compute capacity in the cloud. Launch applications when needed without upfront commitments.
<br />
<br />
<strong>Database:</strong><br />
This extension will check what type of database is used in the application. And reports them as compatible or not with a recommendation on how to migrate them.
<br />
<br />
<strong>Compatible programming languages:</strong><br />
The programming language that is compatible with the EC2 container will be marked. 
If it is not, recommendations will be provided based on the volume of code detected.
<br />
<br />
<strong>Microservices:</strong> <br />
The extension will flag candidates to begin investigation on.
`;

  /**
   * Return the Id of the extension
   * @returns The Id of the extension
   */
  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getTags(): string[] {
    return ["AWS", "EC2", "Amazon"];
  }

  getCreationDate(): string {
    return "2011-10-05T14:48:00.000Z";
  }
  getLastUpdate(): string {
    return "2011-10-05T14:48:00.000Z";
  }

  /**
   * Get the description
   * @returns The description of the extension
   */
  getDescription(): string {
    return this.description;
  }

  getFullDescription(): string {
    return this.fullDescription;
  }

  onStart(): Promise<any> {
    return;
  }

  async executeExtension(application: string): Promise<any> {
    // Find DB Component
    const databases = await SDKTechnology.getDatabasesListAsString(application);
    for (const db of databases) {
      // Get the list of nodes concerned by this action
      const nodesToFlag = await SDKTechnology.getLevelsByTechnology(application, db);

      // If nothing has been matched move to the next item
      if (nodesToFlag.length == 0) continue;

      let title;
      let description;

      if (db.id == "my_sql" || db.id == "postgres_db") {
        // Flag the database as ready to move to Aurora
        title = "Migrate the database to Amazon Aurora";
        description =
          "Migrate these components to Amazon Aurora.\n" +
          "Amazon Aurora is a MySQL and PostgreSQL compatible relational database engine " +
          "that combines the speed and availability of high-end commercial databases with " +
          "the simplicity and cost-effectiveness of open source databases.";
      }

      if (db.id == "oracle_db" || db.id == "t_sql") {
        // Flag the database
        title = "Amazon RDS";
        description =
          "Amazon Relational Database Service (Amazon RDS) makes it easy to set up, " +
          "operate, and scale a relational database in the cloud. It provides cost-efficient and " +
          "resizable capacity while automating time-consuming administration tasks such as " +
          "hardware provisioning, database setup, patching and backups.";
      }

      if (db.id == "db2_database") {
        // Flag as to be removed / transformed
        title = "Use the DB2 to SQL Server Extension";
        description = "Use the DB2 to SQL Server Extension to migrate your DB2 database to a supported technology.";
      }

      const nodesNames: number[] = nodesToFlag.map(x => int(x.identity).toNumber());
      const document = new LevelDocumentNode(application, title, description, nodesNames);
      await document.create();
    }

    // Verify compatible programming languages
    const supportedLanguages = ["java", "php", "c_sharp", "python"];
    const detectedLanguages = await SDKTechnology.getProgrammingLanguageListAsString(application);

    for (const lang of detectedLanguages) {
      // Get the list of nodes concerned by this action
      const nodesToFlag = await SDKTechnology.getLevelsByTechnology(application, lang);

      // If nothing has been matched move to the next item
      if (nodesToFlag.length == 0) continue;

      let title = "";
      let description = "";

      if (supportedLanguages.indexOf(lang.id) >= 0) {
        // Found a compatible language
        title = "Ready to migrate";
        description = "This technology can be easily migrated to EC2.";
      } else {
        // Flag as to rework
        title = "Rework / Rewrite";
        description = "This technology is not supported by the EC2 container.";
      }

      const nodesNames: number[] = nodesToFlag.map(x => int(x.identity).toNumber());
      const document = new LevelDocumentNode(application, title, description, nodesNames);
      await document.create();
    }

    //  Verify compatible api
    const loggingFramework = await SDKFramework.getLoggingFrameworks(application);
    for (const logApi of loggingFramework) {
      // Get the list of nodes concerned by this action
      const nodesToFlag = await SDKFramework.getLevelsByFramework(application, logApi);

      // If nothing has been matched move to the next item
      if (nodesToFlag.length == 0) continue;

      const title = "Move to AWS CloudWatch";
      const description = `
      You can use Amazon CloudWatch Logs to monitor, store, and access your log files from Amazon Elastic Compute Cloud (Amazon EC2) instances, AWS CloudTrail, Route 53, and other sources.
      CloudWatch Logs enables you to centralize the logs from all of your systems, applications, and AWS services that you use, in a single, highly scalable service. 
      You can then easily view them, search them for specific error codes or patterns, filter them based on specific fields, or archive them securely for future analysis. 
      CloudWatch Logs enables you to see all of your logs, regardless of their source, as a single and consistent flow of events ordered by time, and you can query them and sort them based on other dimensions, group them by specific fields, 
      create custom computations with a powerful query language, and visualize log data in dashboards.
`;

      const nodesNames: number[] = nodesToFlag.map(x => int(x.identity).toNumber());
      const document = new LevelDocumentNode(application, title, description, nodesNames);
      await document.create();
    }

    // Logging

    // Find blockers and tags

    // Find micro services
  }
  afterExecution(): Promise<any> {
    return;
  }

  constructor(neo4jAccessLayer: Neo4JAccessLayer, logger: Logger) {
    super(neo4jAccessLayer, logger);
  }
}
