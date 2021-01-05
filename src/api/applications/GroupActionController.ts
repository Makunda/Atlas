import { Neo4JAccessLayer } from "../Neo4jAccessLayer";

export interface GroupAction {
  title: string;
  description: string;
  request: string;
}

export class GroupActionController {
  private static neo4jal: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
  private static contextAnchor = "%%CONTEXT_LABEL%%";

  /**
   * Split application, and merge external nodes aside it
   */
  public static getActions(applicationName: string): GroupAction[] {
    const tempReqTable: GroupAction[] = [
      {
        title: "Merge group",
        description:
          "Merge to a new level 5 the objects prefixed by 'Dm_gl_' in CAST Imaging",
        request: "CALL demeter.group.levels('%%CONTEXT_LABEL%%');"
      },
      {
        title: "Split external",
        description:
          "Split all the external objects in the application and regroup them under they own Level5 nodes",
        request:
          "MATCH (l:Level5:%%CONTEXT_LABEL%%)-[:Aggregates]->(obj:Object:%%CONTEXT_LABEL%%) WHERE obj.External=true SET obj.Tags = CASE WHEN obj.Tags IS NULL THEN ['Dm_gl_External '+l.Name] ELSE obj.Tags + 'Dm_gl_External '+l.Name END"
      },
      {
        title: "Group in external / internal",
        description:
          "Regroup ALL the object in your application in 2 categories : externals and internal. (Configuration checker)",
        request:
          "MATCH (l:Level5:%%CONTEXT_LABEL%%)-[:Aggregates]->(obj:Object:%%CONTEXT_LABEL%%) WHERE obj.External=true SET obj.Tags = CASE WHEN obj.Tags IS NULL THEN ['Dm_gl_External '+l.Name] ELSE obj.Tags + 'Dm_gl_External '+l.Name END"
      },
      {
        title: "Split not in transaction",
        description:
          "Split all the objects not in transactions and regroup them under they own Level5 nodes",
        request: `MATCH (n:ObjectProperty) 
          WITH MAX(n.Id)+1 as maxId 
          MERGE (oc:ObjectProperty { Description: "Prefix_List of transactions going through the object:", Id: maxId }) 
          WITH oc 
          MATCH (o:Object:%%CONTEXT_LABEL%%)<-[:Contains]-(tx:Transaction) 
          WITH oc, o, COLLECT(DISTINCT tx.Name) as transactionList 
          WITH oc, o, REDUCE(s = "", n IN transactionList | s + ', ' + n) as stringTransactions 
          MERGE (o)-[:Property { value: RIGHT(stringTransactions,SIZE(stringTransactions)-2) }]->(oc)`
      }
    ];

    // Replace application anchor, by the provided one
    return tempReqTable.map(x => {
      x.request = x.request.replaceAll(this.contextAnchor, applicationName);
      return x;
    });
  }

  public static executeAction(action: GroupAction): number {
    this.neo4jal.execute(action.request);
    return 0;
  }
}
