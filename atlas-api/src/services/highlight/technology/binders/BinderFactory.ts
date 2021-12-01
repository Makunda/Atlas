import { HighlightLanguage } from "../HighlightLanguage";
import ABinder from "./ABinder";
import FilepathBinder from "./FilepathBinder";
import FullNameBinder from "./FullNameBinder";

/**
 * Pattern Binder factory
 */
export default class BinderFactor {
  /**
   * Get the binder for a specific language
   * @param language Language to get
   * @returns
   */
  public static getBinder(language: HighlightLanguage, application: string): ABinder {
    switch (language) {
      case HighlightLanguage.JAVA:
        return new FullNameBinder(application);
      case HighlightLanguage.CSHARP:
        return new FullNameBinder(application);
      case HighlightLanguage.JAVASCRIPT:
        return new FilepathBinder(application);
      case HighlightLanguage.PYTHON:
        return new FilepathBinder(application);
      case HighlightLanguage.UNKNOWN:
      default:
        return new FullNameBinder(application);
    }
  }
}
