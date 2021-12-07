import { NextFunction, Request, Response } from "express";

export default interface HighlightController {
  /**
   * Apply a specific type of recommendation
   */
  applyRecommendations: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  /**
   * Process a recommendation file sent
   */
  processRecommendationFile: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  /**
   * Test a recommendation sent by the client
   */
  testRecommendation: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
