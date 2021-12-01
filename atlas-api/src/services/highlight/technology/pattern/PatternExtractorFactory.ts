import APatternExtractor from "./APatternExtractor";
import { HighlightLanguage } from "../HighlightLanguage";
import JavaExtractor from "./JavaPatternExtractor";
import JavascriptPatternExtractor from "./JavascriptPatternExtractor";
import CsharpExtractor from "./CsharpPatternExtractor";
import UniversalExtractor from "./UniversalExtractor";

/**
 * Factory for pattern extractor
 */
export default class PatternExtractorFactory {
  /**
   * Get the extractor for each language
   * @param language Language to get
   * @returns the extractor
   */
  public static getPatternExtractor(language: HighlightLanguage): APatternExtractor {
    switch (language) {
      // Supported languages
      case HighlightLanguage.JAVA:
        return new JavaExtractor();
      case HighlightLanguage.JAVASCRIPT:
        return new JavascriptPatternExtractor();
      case HighlightLanguage.CSHARP:
        return new CsharpExtractor();

      // Universal & defaults
      case HighlightLanguage.UNKNOWN:
      default:
        return new UniversalExtractor();
    }
  }
}
