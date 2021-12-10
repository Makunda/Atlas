import APatternExtractor from "./APatternExtractor";

export default class JavascriptPatternExtractor extends APatternExtractor {
  protected technology: string;

  /**
   * Get JS Patterns
   * @param component Name of the component
   */
  public getPatterns(component: string): string[] {
    if(component.includes("/")) {
      const split = component.split("/");
      const opt1 = "\\" + split[0];
      const opt2 = "\\" + split[1];
      return [opt1, opt2];
    }

    return ["\\" + component];
  }

  public getName(component: string): string {
    return component;
  }
}
