import Sigma from "sigma";

import ForceSupervisor from "graphology-layout-force/worker";
import Graph from "graphology";
import GraphNode from "@/services/graph/GraphNode";
import GraphRelationship from "@/services/graph/GraphRelationship";

export default class GraphViewer {
  private container: HTMLElement;
  private renderer: Sigma;
  private layout: ForceSupervisor;
  private graph: Graph;

  /**
   * Build a graph viewer
   * @param container Container element for sigma canvas
   * @param parameters Optional parameters for the graph
   * @constructor
   */
  public constructor(
    container: HTMLElement,
    parameters?: {
      nodes: GraphNode[];
      relationship: GraphRelationship[];
      start: boolean;
    }
  ) {
    this.container = container;
    this.graph = new Graph();

    if (parameters) {
      this.addNodes(parameters.nodes, parameters.relationship);
      if (parameters.start) {
        this.render();
        this.start();
      }
    }
  }

  public start() {
    // Create the spring layout and start it
    this.layout = new ForceSupervisor(this.graph);
    this.layout.start();
  }

  public render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.renderer = new Sigma(this.graph, this.container);

    // State for drag'n'drop
    let draggedNode: string | null = null;
    let isDragging = false;

    // On mouse down on a node
    //  - we enable the drag mode
    //  - save in the dragged node in the state
    //  - highlight the node
    //  - disable the camera so its state is not updated
    this.renderer.on("downNode", e => {
      isDragging = true;
      draggedNode = e.node;
      this.graph.setNodeAttribute(draggedNode, "highlighted", true);
      this.renderer.getCamera().disable();
    });

    // On mouse move, if the drag mode is enabled, we change the position of the draggedNode
    this.renderer.getMouseCaptor().on("mousemovebody", e => {
      if (!isDragging || !draggedNode) return;

      // Get new position of node
      const pos = this.renderer.viewportToGraph(e);

      this.graph.setNodeAttribute(draggedNode, "x", pos.x);
      this.graph.setNodeAttribute(draggedNode, "y", pos.y);
    });

    // On mouse up, we reset the autoscale and the dragging mode
    this.renderer.getMouseCaptor().on("mouseup", () => {
      if (draggedNode) {
        this.graph.removeNodeAttribute(draggedNode, "highlighted");
      }
      isDragging = false;
      draggedNode = null;
      this.renderer.getCamera().enable();
    });
  }

  /**
   * Add a list of nodes to the graph
   * @param nodes Nodes to add
   * @param relationships Relationship to add
   */
  public addNodes(nodes: GraphNode[], relationships: GraphRelationship[]) {
    //Add nodes
    for (const n of nodes) {
      this.graph.addNode(n.getId(), n.buildAttributes());
    }

    // Add relationships
    for (const r of relationships) {
      this.graph.addEdge(r.source, r.target);
    }
    // Rebuild
  }

  public loadExample() {
    const RED = "#FA4F40";
    const BLUE = "#727EE0";
    const GREEN = "#5DB346";

    this.graph.addNode("n1", { label: "Test", x: 0, y: 0, size: 10, color: RED });
    this.graph.addNode("n2", { x: -5, y: 5, size: 10, color: RED });
    this.graph.addNode("n3", { x: 5, y: 5, size: 10, color: BLUE });
    this.graph.addNode("n4", { x: 0, y: 10, size: 10, color: GREEN });
    this.graph.addEdge("n1", "n2");
    this.graph.addEdge("n2", "n4");
    this.graph.addEdge("n4", "n3");
    this.graph.addEdge("n3", "n1");

    this.render();
    this.start();
  }
}
