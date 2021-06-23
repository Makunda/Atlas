import AAgent from "./AgentAbstract";
import ArchitectureAgent from "./ArchitectureAgent";
import FrameworkAgent from "./FrameworkAgent";
import LevelAgent from "./LevelAgent";
import ModuleAgent from "./ModuleAgent";

export enum Agent {
    FRAMEWORK_AGENT,
    LEVEL_AGENT,
    MODULE_AGENT,
    ARCHITECTURE_AGENT
}

/**
 * Manager of the different agent in charge of their lifecycle
 */
export class AgentManager {

    public static INSTANCE: AgentManager;
    private frameworkAgent: FrameworkAgent;
    private levelAgent: LevelAgent;
    private moduleAgent: ModuleAgent;
    private architectureAgent: ArchitectureAgent;

    private constructor() {
        this.frameworkAgent = new FrameworkAgent();
        this.levelAgent = new LevelAgent();
        this.moduleAgent = new ModuleAgent();
        this.architectureAgent = new ArchitectureAgent();

        this.frameworkAgent.launch();
        this.levelAgent.launch();
        this.architectureAgent.launch();
    }

    /**
     * Get the current instance of the local manager
     */
    public static getInstance() {
        if (this.INSTANCE == null) {
            this.INSTANCE = new AgentManager();
        }

        return this.INSTANCE;
    }

    /**
     * Stop a specific agent in the database
     * @param agent Name of the agent
     */
    public stopAgent(agent: Agent) {
        this.getAgent(agent).stop();
    }

    /**
     * Start a specific agent in the database
     * @param agent Name of the agent
     */
    public startAgent(agent: Agent) {
        this.getAgent(agent).launch();
    }

    /**
     * Get the status of a specific agent
     * @param agent Name of the agent
     */
    public getAgentStatus(agent: Agent): boolean {
        return this.getAgent(agent).getStatus();
    }

    /**
     * Get the prefix used by the agent
     * @param agent Name of the agent
     */
    public async getAgentPrefix(agent: Agent): Promise<string> {
        return await this.getAgent(agent).getPrefix();
    }

    /**
     * Force the action of the agent
     * @param agent Name of the agent
     */
    public async forceRun(agent: Agent): Promise<void> {
        await this.getAgent(agent).group();
    }

    /**
     * Initialize the different agents
     */
    public initialize() {
        this.frameworkAgent.launch();
    }

    private getAgent(agent: Agent | string): AAgent {
        switch (agent) {
            case Agent.FRAMEWORK_AGENT :
                return this.frameworkAgent;
            case "framework":
                return this.frameworkAgent;
            case Agent.LEVEL_AGENT :
                return this.levelAgent;
            case "level":
                return this.levelAgent;
            case Agent.MODULE_AGENT :
                return this.moduleAgent;
            case "module":
                return this.moduleAgent;
            case "architecture":
                return this.architectureAgent;
            case Agent.ARCHITECTURE_AGENT:
                return this.architectureAgent;
            default:
                return null;
        }
    }

}

// Start the Agent Manager
const agentManager = AgentManager.getInstance();