export interface ApiResponse {
  errors: string[];
  data: Record<string, any>;
  message: string;
}
