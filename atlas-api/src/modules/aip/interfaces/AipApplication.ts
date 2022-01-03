import { AipSchema } from "@modules/aip/interfaces/AipSchema";

/**
 * Application as configured in postgresql
 */
export default interface AipApplication {
  id?: number;

  aipName: string;
  name: string;

  local?: AipSchema;
  management?: AipSchema;
  central?: AipSchema;

  linkedImagingApp?: string;
}