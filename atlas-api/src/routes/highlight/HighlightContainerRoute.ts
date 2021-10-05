/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import HighlightContainerBlockerController from "@controller/highlight/HighlightContainerBlockerController";
import Route from "@interfaces/routes.interface";

import AbstractRecommendationRoute from "./AbstractRecommendationRoute";

/**
 * Route related to the recommendation of cloud blockers
 */
class HighlightContainerRoute extends AbstractRecommendationRoute implements Route {
  protected getController() {
    return new HighlightContainerBlockerController();
  }
}

export default HighlightContainerRoute;
