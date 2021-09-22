import { AipSchema } from "./AipSchema";

export enum ValidityServer {
  UNKNOWN = "Unknown",
  VALID = "Valid",
  ERROR = "Error",
  LOADING = "Loading",
}

/**
 * Interface of a configuration node
 */
export interface AipConfiguration {
  id?: number;
  name: string;
  url: string;
  port: number;
  database: string;
  user: string;
  password: string;
  schemas?: AipSchema[];
  valid?: ValidityServer;
}
