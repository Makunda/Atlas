import APatternExtractor from "./APatternExtractor";

/**
 * Csharp extractor
 */
export default class CsharpPatternExtractor extends APatternExtractor {
  protected technology: string = "c#";

  /**
   * Get the pattern for Java
   * @param component Component name to analyze
   * @returns
   */
  public getPatterns(component: string): string[] {
    // GNOME/nautilus - aspnet/Identity
    if (component.includes("/")) {
      const split = component.split("/");
      const choice1 = split[0];
      const choice2 = split[0] + "." + split[1];
      return [choice1, choice2];
    }

    return [component];
  }

  /**
   * Get the pattern for java
   * @param component Component name
   * @returns
   */
  public getName(component: string): string {
    // aspnet/Identity
    if (component.includes("/")) {
      const split = component.split("/");
      return this.capitalizeFirstLetter(split[0]) + " " + this.getName(split[1]);
    }

    // opencms-core
    if (component.includes("-")) {
      const split = component.split("-");
      split[0] = this.capitalizeFirstLetter(split[0]);
      return split.join(" ");
    }

    return component;
  }
}
