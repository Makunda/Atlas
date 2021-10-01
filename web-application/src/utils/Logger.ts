export default class Logger {
  public static log(
    type: string,
    title: string,
    text: string,
    data?: any
  ): void {
    let display = `[${type}] ${title} - ${text}`;

    console.log(`%c ${display}`, "background: #222; color: #bada55");
    if (data) {
      display += `Data: ${data}`;
      console.log(display);
    }
  }

  /**
   * Success log
   * @param title Title of the message
   * @param text Text of the message
   */
  public static error(title: string, text: string, error?: any): void {
    this.log("danger", title, text, error);
  }

  /**
   * Success log
   * @param title Title of the message
   * @param text Text of the message
   */
  public static success(title: string, text: string): void {
    this.log("success", title, text);
  }
}
