/**
 * Struct returned by the API
 */
export interface ApiResponse {
  status: number;
  data: {
    message: string;
    data?: string;
    errors?: string[];
  };
  config: any;
}

/***
 * Class handling the response from the API
 */
export class ApiResponseImpl<T> implements ApiResponse {
  message = "";
  status: number;
  config: any;
  data = {} as any;
  response: T = {} as any;
  errors: string[] = [];
  private success: boolean;

  constructor(response: ApiResponse) {
    this.status = response.status;
    this.config = response.config;

    if (!response.data) {
      this.success = false;
      this.errors = [`Request failed with status : ${response.status}.`];
    } else {
      // Valid response
      this.data = response.data;
      this.message = response.data.message;
      this.errors = response.data.errors || [];

      if (this.errors.length > 0) {
        this.success = false;
      } else {
        this.success = true;
        this.response = (response.data.data || {}) as any;
      }
    }
  }

  /**
   * Check if the API response is positive or not
   * @returns True if the query was successfully executed
   */
  public isSuccess(): boolean {
    return this.success;
  }

  public getData(): T {
    return this.response;
  }

  public getErrors(): string[] {
    return this.errors;
  }

  public getMessage(): string {
    return this.message;
  }
}
