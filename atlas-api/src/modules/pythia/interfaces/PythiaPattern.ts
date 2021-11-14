import PythiaLanguage from "./PythiaLanguage";
import PythiaFramework from "./PythiaFramework";

export default interface PythiaPattern {
  framework: PythiaFramework;
  language: PythiaLanguage;
  pattern: string;
  isRegex: boolean;

  createdOn: Date;
  lastModified: Date;

  // Misc & Utils
  flags: string;
}
