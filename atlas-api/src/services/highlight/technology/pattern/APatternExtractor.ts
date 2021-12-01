export default abstract class APatternExtractor {
  // Technology to bind
  protected abstract technology: string;

  /**
   * Get the pattern based on the component name
   * @param component Component name to analyze
   */
  public abstract getPatterns(component: string): string[];

  /**
   * Get the name of the component
   * @param component Component name to analyze
   */
  public abstract getName(component: string): string;

  /**
   * Capitalize a word
   * @param string String to capitalize
   * @returns The capitalized string
   */
  protected capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
