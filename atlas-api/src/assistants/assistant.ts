export enum DemeterActions {
  groupLevel = "groupLevel",
  groupModule = "groupModule",
  groupArchitecture = "groupArchitecture",
}

export interface IFrameworkAssistant {
  id: string;
  started: boolean;
  category: string;
  actions: DemeterActions[];
}

export class FrameworkAssistant {
  private id: string;
  private started: boolean;
  private category: string;
  private actions: DemeterActions[];

  constructor(id: string, category: string, actions: DemeterActions[]) {
    this.id = id;
    this.started = true;
    this.category = category;
    this.actions = actions;
  }

  /**
   * Return the JSON
   */
  public static fromJson(json: IFrameworkAssistant): FrameworkAssistant {
    const assistant: FrameworkAssistant = new FrameworkAssistant(json.id, json.category, json.actions);
    assistant.started = json.started;
    return assistant;
  }

  public getId(): string {
    return this.id;
  }

  public setCategory(category: string) {
    this.category = category;
  }

  public getCategory(): string {
    return this.category;
  }

  public setActions(actions: DemeterActions[]) {
    this.actions = actions;
  }

  public getActions(): DemeterActions[] {
    return this.actions;
  }

  public isRunning(): boolean {
    return this.started;
  }

  public start() {
    this.started = true;
  }

  public stop() {
    this.started = false;
  }

  /**
   * Serialize the object
   */
  public serialize(): IFrameworkAssistant {
    return {
      id: this.id,
      started: this.started,
      category: this.category,
      actions: this.actions,
    };
  }
}
