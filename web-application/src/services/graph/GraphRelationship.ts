export default class GraphRelationship {
  private _source: string;

  get source(): string {
    return this._source;
  }

  set source(value: string) {
    this._source = value;
  }

  private _target: string;

  get target(): string {
    return this._target;
  }

  set target(value: string) {
    this._target = value;
  }
}
