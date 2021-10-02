/**
 * {
    "id": "jcl",
    "name": "Jcl",
    "description": "",
    "categories": ["mainframe"],
    "highlight": "Jsp",
    "imaging": {
      "name": "JCL Batch Processing",
      "type": ["JCL Job", "JCL External Procedure", "JCL Procedure"]
    }
  },
 */

export default interface Technology {
  id: string;
  name: string;
  description: string;
  categories: string[];
  highlight: string[];
  imaging: {
    name: string;
    type: string[];
  };
}
