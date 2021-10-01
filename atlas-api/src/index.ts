/* eslint-disable @typescript-eslint/no-unsafe-call */
import "./pre-start"; // Must be the first import
import "module-alias";
import config from "config";
import { logger } from "@shared/Logger";
import { Neo4JAccessLayer } from "@database/Neo4jAccessLayer";
// Start the server
const port = Number(process.env.PORT || config.get("atlas.port"));
const hostname = String(config.get("atlas.hotsname") || "localhost");

/**
 * Launch the application
 */
async function launch() {
  try {
    // Initialize the routines
    await Neo4JAccessLayer.connect();

    // Import autonomous modules and Cron operations
    const AgentModule: any = await import("@agents/AgentManager");
    const FrameworkAssistantModule: any = await import("./assistants/framework.assistant");

    FrameworkAssistantModule.FrameworkAssistantManager.getInstance();
    const agentManager = AgentModule.AgentManager.getInstance();
    agentManager.initialize();

    // Import and launch the server
    const AppModule: any = await import("@server");

    AppModule.default.listen(port, hostname, () => {
      logger.info("Express server started on : http://localhost:" + port);
      logger.info("Front end should be on : http://localhost:3001");
    });
  } catch (err) {
    logger.error("Critical error: \n", err);
    logger.error("\n\nFailed to start the application. Please check the logs.\n\n");
  }
}

launch();
