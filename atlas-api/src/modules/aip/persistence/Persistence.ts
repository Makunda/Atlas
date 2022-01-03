import { Neo4JAccessLayer } from "@database/Neo4JAccessLayer";

export default class  Persistence {
  protected neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

  protected readonly CONFIGURATION_NODE_LABEL = "AipConfiguration";
  protected readonly APP_NODE_LABEL = "AipApplication";
  protected readonly APP_SCHEMA_NODE_LABEL = "AipApplicationSchema";

  protected readonly CONFIGURATION_TO_APP_REL = "BELONGS_TO";
  protected readonly APP_TO_SCHEMA_REL = "INCLUDES";


}