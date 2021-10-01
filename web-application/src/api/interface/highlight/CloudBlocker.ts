export default interface CloudBlocker {
  id?: number;
  application: string;
  requirement: string;
  blocker: string;
  technology: string;
  file: string;
}
