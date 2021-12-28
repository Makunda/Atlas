/**
 * Node Graph
 */
export default class GraphNode {
  /**
   * Constructor
   * @param id Id of the node
   * @param label Label of the node
   * @param size Size of the node
   * @param attributes Attributes list
   */
  constructor(id: string, label?: string, size?: number, attributes?: any) {
    this._id = id;
    this._label = label || "";
    this._attributes = attributes || {};
    this._size = size || 0;
  }

  private _id: string;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  private _attributes: any;

  get attributes(): any {
    return this._attributes;
  }

  set attributes(value: any) {
    this._attributes = value;
  }

  private _size: number;

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  private _label: string;

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  /**
   * Get the node id
   */
  public getId(): string {
    return this._id;
  }

  /**
   * Build and return the node attributes
   */
  public buildAttributes(): any {
    const attr = Object.assign({}, this._attributes);
    attr["label"] = this._label;
    attr["size"] = this._size;
    return attr;
  }

  /**
   * Get label
   */
  public getLabel(): string {
    return this._label;
  }
}
