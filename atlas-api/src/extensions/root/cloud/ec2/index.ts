import Extension from "src/extensions/Extension";

export default class EC2 extends Extension {
  getId(): string {
    throw new Error("Method not implemented.");
  }
  getName(): string {
    throw new Error("Method not implemented.");
  }
  getDescription(): string {
    throw new Error("Method not implemented.");
  }
  onStart(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  execute(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  afterExecution(): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
