import APatternExtractor from "./APatternExtractor";

export default class UniversalExtractor extends APatternExtractor {
  protected technology: string;

  public getPatterns(component: string): string[] {
    return [component];
  }

  public getName(component: string): string {
    return component;
  }
}
