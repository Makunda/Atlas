/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Route from "@interfaces/routes.interface";
import HighlightOpenSourceController from "@controller/highlight/HighlightOpenSourceController";
import AbstractRecommendationRoute from "./AbstractRecommendationRoute";

class HighlightOssRoute extends AbstractRecommendationRoute implements Route {
  protected getController() {
    return new HighlightOpenSourceController();
  }
}

export default HighlightOssRoute;
