import { Neo4JAccessLayer } from "@database/Neo4jAccessLayer";
import Extension from "src/extensions/Extension";
import SDKTechnology from "src/extensions/SDKTechnology";
import { Logger } from "winston";

export default class EC2 extends Extension {
  private id = "7690f8ce-c73e-43ee-be88-808ea280c995";
  private name = "EC2 Cloud service";
  private description =
    "Secure and resizable compute capacity in the cloud. Launch applications when needed without upfront commitments";

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

  /**
   * Get the description
   * @returns The description of the extension
   */
  getDescription(): string {
    return this.description;
  }

  onStart(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async execute(application: string): Promise<any> {
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
        description = "Use the DB2 to SQL Server Extension";
      }
    }

    // Verify compatible programming languages

    //  Verify compatible api

    // Find blockers

    // Find micro services
  }
  afterExecution(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  constructor(neo4jAccessLayer: Neo4JAccessLayer, logger: Logger) {
    super(neo4jAccessLayer, logger);
  }
}
