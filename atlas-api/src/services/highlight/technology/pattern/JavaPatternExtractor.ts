import APatternExtractor from "./APatternExtractor";

export default class JavaPatternExtractor extends APatternExtractor {
  protected technology: string = "java";

  /**
   * Get the pattern for Java
   * @param component Component name to analyze
   * @returns
   */
  public getPatterns(component: string): string[] {
    // org.mockito:mockito-core
    if (component.includes(":")) {
      const split = component.split(":");

      const results: string[] = [];
      const base = this.getPatterns(split[0]);
      results.push(...base);

      const baseName = split[1];
      // Add potential second member
      if (baseName.includes("-")) {
        const secMem = split[1].split("-");
        if (!baseName.includes(secMem[0])) results.push(base[0] + "." + secMem[0]);
        if (!baseName.includes(secMem[1])) results.push(base[0] + "." + secMem[1]);
      }

      return results;
    }

    // opencms-core
    if (component.includes("-")) {
      const str = String("." + component.split("-")[0] + "." + component.split("-")[1]);
      return [str];
    }

    // apache/cassandra - Split in 2
    if (component.includes("/")) {
      const split = component.split("/")[1];
      const first = String(split[0] + "." + split[1]);
      const retArr: string[] = this.getPatterns(split[1]);
      retArr.push(first);

      return retArr;
    }

    return [component];
  }

  /**
   * Get the pattern for java
   * @param component Component name
   * @returns
   */
  public getName(component: string): string {
    // org.mockito:mockito-core
    if (component.includes(":")) {
      return component.split(":")[1];
    }

    // alkacon/opencms-core
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
