import {Router} from 'express';
import Route from '@interfaces/routes.interface';
import AgentController from '@controller/atlas/agent.controller';


class AgentRoute implements Route {
    public path = '';
    public router = Router();
    private agentController = new AgentController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/:name/status`, this.agentController.getAgentStatus);
        this.router.get(`${this.path}/:name/start`, this.agentController.startAgent);
        this.router.get(`${this.path}/:name/stop`, this.agentController.stopAgent);
        this.router.get(`${this.path}/:name/prefix`, this.agentController.getPrefix);
        this.router.get(`${this.path}/:name/force`, this.agentController.force);
    }
}

export default AgentRoute;

