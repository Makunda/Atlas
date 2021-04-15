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

import {int} from "neo4j-driver";

interface ILevel {
    _id?: number;
    concept: boolean;
    alternateDrilldown?: boolean;
    color: string;
    level: number;
    count: number;
    fullName: string;
    name: string;
    shade: string;
    children?: ILevel[];
}


class LevelNode {

    private levelObj: ILevel;

    constructor(level: ILevel) {
        this.levelObj = level;
    }

    /**
     * Create an object from a row
     * @param row
     */
    public static fromObj(row: any): LevelNode {
        const level = {
            _id: int(row["identity"]).toNumber() || -1,
            concept: Boolean(row["properties"]["Concept"]) || false,
            alternateDrilldown: Boolean(row["properties"]["AlternateDrilldown"]) || false,
            color: String(row["properties"]["Color"]),
            fullName: String(row["properties"]["FullName"]),
            name: String(row["properties"]["Name"]),
            level: int(row["properties"]["Level"]).toNumber(),
            count: int(row["properties"]["Count"]).toNumber(),
            shade: String(row["properties"]["Shade"])
        } as ILevel
        return new LevelNode(level);
    }

    public getRecord(): ILevel {
        return this.levelObj;
    }

    /**
     * Generate a merge request
     * @param application
     */
    public getMergeRequest(application: string): string {
        const levelName = `Level${this.levelObj.level}`
        const req = `MERGE (l:\`${application}\`:${levelName} { Name: '${this.levelObj.name}'} ) 
            SET l.Concept = ${this.levelObj.concept || false}
            SET l.AlternateDrilldown = ${this.levelObj.alternateDrilldown || true}
            SET l.Color = '${this.levelObj.color || "rgb(0,0,0)"}'
            SET l.FullName = '${this.levelObj.fullName}'
            SET l.Name = '${this.levelObj.name}'
            SET l.Level = ${this.levelObj.level}
            SET l.Count = ${this.levelObj.count || 0}
            SET l.Shade  = '${this.levelObj.shade}'
            RETURN l as node;`;
        return req;
    }
}

export {ILevel, LevelNode}
