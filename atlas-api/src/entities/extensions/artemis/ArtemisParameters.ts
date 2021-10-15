/**
 * Interface of the Artemis parameters
 */
export default class ArtemisParameters {
  private onlineMode = false;
  private repositoryMode = false;
  private pythiaURL = "";
  private pythiaToken = "";
  private toExlude: {
    regexFullName: string;
    regexObjectType: string;
  };

  public getOnlineMode(): boolean {
    return this.onlineMode;
  }

  public getRepositoryMode(): boolean {
    return this.repositoryMode;
  }

  public getPythiaUrl(): string {
    return this.pythiaURL;
  }

  public getPythiaToken(): string {
    return "token";
  }

  /**
   * Set the value of the online mode
   * @param value Value of online mode
   */
  public setOnlineMode(value = true): ArtemisParameters {
    this.onlineMode = value;
    return this;
  }

  /**
   * Set the value of the repository mode
   * @param value New value of the repository mode
   * @returns The Artemis parameter class
   */
  public setRepositoryMode(value = true): ArtemisParameters {
    this.repositoryMode = value;
    return this;
  }

  /**
   * Activate the pythia detection
   * @param value New value of the repository mode
   * @returns The Artemis parameter class
   */
  public setPythiaParameters(url: string, token: string): ArtemisParameters {
    this.pythiaURL = url;
    this.pythiaToken = token;
    return this;
  }

  /**
   * Convert the object to a JSON to send to pythia
   */
  public toJSON(): string {
    return `{
            "OnlineMode": ${this.onlineMode},
            "RepositoryMode": ${this.repositoryMode},
            "PythiaURL": "${this.pythiaURL}",
            "PythiaToken": "${this.pythiaToken}"
        }`;
  }

  /**
   * Empty constructor
   */
  public constructor() {
    /** Empty */
  }
}
