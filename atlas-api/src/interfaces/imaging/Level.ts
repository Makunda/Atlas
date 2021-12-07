/*

{
    "identity": 1226054,
    "labels": [
    "Level5",
    "TriPOD"
],
    "properties": {
    "Concept": false,
        "AlternateDrilldown?": true,
        "Color": "rgb(176,48,96)",
        "FullName": "Services##Logic Services##Business Logic##.NET Business Logic##Dml_Stripe API",
        "Level": 5,
        "Count": 10,
        "Name": "Stripe API",
        "Shade": "rgb(105,105,105)##rgb(0,0,128)##rgb(176,196,222)##rgb(176,48,96)##rgb(176,48,96)"
}
}*/

import { int, Node } from "neo4j-driver";

interface Level {
  _id?: number;
  hidden?: boolean;
  concept: boolean;
  alternateDrilldown?: boolean;
  color: string;
  level?: number;
  iconUrl?: string;
  count: number;
  fullName: string;
  name: string;
  shade: string;
  children?: Level[];
}

class LevelNode {
  private static HIDDEN_LEVEL_LABEL_PREFIX = "HiddenL";
  private levelObj: Level;

  constructor(level: Level) {
    this.levelObj = level;
  }

  /**
   * Get the level depth based on its label
   * @param node
   */
  public static getLevelDepth(node: Node): number {
    const labels = node.labels;
    if (labels.includes("Level5") || labels.includes(`${this.HIDDEN_LEVEL_LABEL_PREFIX}5`)) return 5;
    else if (labels.includes("Level4") || labels.includes(`${this.HIDDEN_LEVEL_LABEL_PREFIX}4`)) return 4;
    else if (labels.includes("Level3") || labels.includes(`${this.HIDDEN_LEVEL_LABEL_PREFIX}3`)) return 3;
    else if (labels.includes("Level2") || labels.includes(`${this.HIDDEN_LEVEL_LABEL_PREFIX}2`)) return 2;
    else if (labels.includes("Level1") || labels.includes(`${this.HIDDEN_LEVEL_LABEL_PREFIX}1`)) return 1;
    else throw new Error(`Failed to get the level of the node with id [${node.identity.toNumber()}]`);
  }

  /**
   * Get a level interface from a node
   * @param node Node to convert
   * @param hidden Choose if the node is hidden or not
   */
  public static fromNode(node: Node, hidden: boolean = false): Level {

    const level = this.getLevelDepth(node); // Get the level from label
    return {
      _id: node.identity.toNumber() || -1,
      hidden: this.getPropertyOrDefault<boolean>(node, "Hidden", hidden),
      level: level,
      iconUrl: this.getPropertyOrDefault<string>(node, "IconUrl", "/img/default.svg"),
      concept: this.getPropertyOrDefault<boolean>(node, "Concept", false),
      alternateDrilldown: this.getPropertyOrDefault<boolean>(node, "AlternateDrilldown", false),
      color: this.getPropertyOrDefault<string>(node, "Color", "rgb(15,245,5)"),
      fullName: this.getPropertyOrDefault<string>(node, "FullName"),
      name: this.getPropertyOrDefault<string>(node, "Name"),
      count: this.getPropertyAsNumberOrDefault(node, "Count", 0),
      shade: this.getPropertyOrDefault<string>(node, "Shade"),
    } as Level;
  }

  /**
   * Get default value
   * @param node Node to explore
   * @param property Property to get
   * @param defaultVal Default value, if no value is provided, throw an Exception
   * @private
   */
  private static getPropertyOrDefault<T>(node: Node, property: string, defaultVal ?: T): T {
    if (!(property in node.properties) && typeof defaultVal === "undefined") throw new Error(`Property ${property} doesn't exist in node [${node.identity.toNumber()}].`);
    return (node.properties[property] || defaultVal) as T;
  }

  /**
   * Get the property as a number
   * @param node Node to treat
   * @param property Property to get
   * @param defaultVal Default value, if no value is provided, throw an Exception
   * @private
   */
  private static getPropertyAsNumberOrDefault(node: Node, property: string, defaultVal ?: number): number {
    if (!(property in node.properties) && !defaultVal) throw new Error(`Property ${property} doesn't exist in node [${node.identity.toNumber()}].`);
    return (int(node.properties[property]).toNumber() || defaultVal);
  }

  public getRecord(): Level {
    return this.levelObj;
  }

  /**
   * Generate a merge request
   * @param application
   */
  public getMergeRequest(application: string): string {
    const levelName = `Level${this.levelObj.level}`;
    return `MERGE (l:\`${application}\`:${levelName} { Name: '${this.levelObj.name}'} ) 
            SET l.Concept = ${this.levelObj.concept || false}
            SET l.AlternateDrilldown = ${this.levelObj.alternateDrilldown || true}
            SET l.Color = '${this.levelObj.color || "rgb(255,86,86)"}'
            SET l.FullName = '${this.levelObj.fullName}'
            SET l.Name = '${this.levelObj.name}'
            SET l.Level = ${this.levelObj.level}
            SET l.Count = ${this.levelObj.count || 0}
            SET l.Shade  = '${this.levelObj.shade}'
            RETURN l as node;`;
  }
}

export { Level as Level, LevelNode };
