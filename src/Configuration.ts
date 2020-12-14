import PropertiesReader, { Reader } from "properties-reader";
const properties: Reader = PropertiesReader("./env/demeter.properties");

export class Configuration {
  public static getProperty(propertyName: string): any {
    return properties.get(propertyName);
  }

  public static setProperty(propertyName: string, value: string): void {
    properties.set(propertyName, value);
  }
}
