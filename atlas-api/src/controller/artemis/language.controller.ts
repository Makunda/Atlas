import { NextFunction, Request, Response } from 'express';
import LanguageService from "@services/artemis/language.service";


class LanguageController {
    private languageService = new LanguageService();
  
    public getLanguages = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
  
        const results: string[] = await this.languageService.getLanguages();
        res.status(200).json({ data: results, message: 'languages' });
        
      } catch (error) {
        next(error);
      }
    };
  }
  
  export default LanguageController;