export enum HighlightLanguage {
  JAVA = "java",
  CSHARP = "C#",
  JAVASCRIPT = "javascript",
  PYTHON = "python",
  UNKNOWN = "unknown",
}

/**
 * Get Highlight language
 * @param language Language to get
 * @returns The equivalent Supported
 */
export function getHighlightLanguage(language: string): HighlightLanguage {
  switch (language.toLowerCase()) {
    case "java":
      return HighlightLanguage.JAVA;
    case "c#":
      return HighlightLanguage.CSHARP;
    case "javascript":
    case "rich text format":
    case "html":
      return HighlightLanguage.JAVASCRIPT;
    case "python":
      return HighlightLanguage.PYTHON;
    default:
      return HighlightLanguage.UNKNOWN;
  }
}
