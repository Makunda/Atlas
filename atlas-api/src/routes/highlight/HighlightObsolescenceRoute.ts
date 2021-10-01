/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Route from "@interfaces/routes.interface";
import HighlightObsolescenceController from "@controller/highlight/HighlightObsolescenceController";
import AbstractRecommendationRoute from "./AbstractRecommendationRoute";

/**
 * Highlight route related to the open source safety
 */
class HighlightObsolescenceRoute extends AbstractRecommendationRoute implements Route {
  protected getController() {
    return new HighlightObsolescenceController();
  }
}

export default HighlightObsolescenceRoute;
