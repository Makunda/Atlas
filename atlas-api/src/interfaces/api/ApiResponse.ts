/**
 * Interface for the communication of the api
 */
export default interface ApiResponse {
  data?: any;
  message: string;
  errors?: string[];
}
