export default interface Level {
  _id?: number;
  hidden?: boolean;
  concept: boolean;
  alternateDrilldown?: boolean;
  color: string;
  level: number;
  count: number;
  fullName: string;
  name: string;
  shade: string;
  children?: Level[];
}
