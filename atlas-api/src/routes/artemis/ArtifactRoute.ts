import {Router} from 'express';
import Route from '@interfaces/routes.interface';
import ArtifactController from '@controller/artemis/ArtifactController';


class ArtifactRoute implements Route {
    public path = '';
    public router = Router();
    public artifactController = new ArtifactController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/all`, this.artifactController.getListArtifact);
        this.router.post(`${this.path}/tree`, this.artifactController.getArtifactsAsTree);
        this.router.post(`${this.path}/extract`, this.artifactController.extractArtifacts);
    }
}

export default ArtifactRoute;
