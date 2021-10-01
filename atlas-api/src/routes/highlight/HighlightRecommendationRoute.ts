/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import HighlightCloudBlockerController from "@controller/highlight/HighlightCloudBlockerController";
import Route from "@interfaces/routes.interface";

import AbstractRecommendationRoute from "./AbstractRecommendationRoute";

/**
 * Route related to the recommendation of cloud blockers
 */
class HighlightRecommendationRoute extends AbstractRecommendationRoute implements Route {
  protected getController() {
    return new HighlightCloudBlockerController();
  }
}

export default HighlightRecommendationRoute;
