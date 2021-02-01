import IAgent from "./agent.interface";
import FrameworkAgent from "./framework.agent";

export enum Agent {
    FRAMEWORK_AGENT
}

/**
 * Manager of the different agent in charge of their lifecycle
 */
export class AgentManager {

    private frameworkAgent: FrameworkAgent;
    public static INSTANCE: AgentManager;

    private getAgent(agent: Agent|string) : IAgent {
        switch(agent) {
            case Agent.FRAMEWORK_AGENT : 
                return this.frameworkAgent;
            case "framework": 
                return this.frameworkAgent;
            default:
                return null;
        }
    }

    /**
     * Stop a specific agent in the database
     * @param agent Name of the agent
     */
    public stopAgent(agent:Agent) {
        this.getAgent(agent).stop();
    }

    /**
     * Start a specific agent in the database
     * @param agent Name of the agent
     */
    public startAgent(agent:Agent) {
        this.getAgent(agent).launch();
    }

    /**
     * Get the status of a specifc agent
     * @param agent Name of the agent
     */
    public getAgentStatus(agent:Agent) : boolean {
        return this.getAgent(agent).getStatus();
    }

    /**
     * Initialize the different agents
     */
    public initialize() {
        this.frameworkAgent.launch();
    }

    /**
     * Get the current instance of the local manager
     */
    public static getInstance() {
        if(this.INSTANCE == null) {
            this.INSTANCE = new AgentManager();
        }

        return this.INSTANCE;
    }

    private constructor() {
        this.frameworkAgent = new FrameworkAgent();
    }

}