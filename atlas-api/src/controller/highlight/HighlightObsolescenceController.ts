/* eslint-disable max-len */

import HighlightObsolescenceService from "@services/highlight/file/HighlightObsolescenceService";
import HighlightController from "./HighlightController";
import HighlightOpenSourceController from "./HighlightOpenSourceController";

/**
 * Controller managing the Obsolescence
 */
export default class HighlightObsolescenceController
  extends HighlightOpenSourceController
  implements HighlightController
{
  /**
   * Invoke super and override the Parent Service
   */
  constructor() {
    super();
    this.highlightService = new HighlightObsolescenceService();
  }
}
