class Neo4jNoResults extends Error {
  public request: string;
  public message: string;

  constructor(message: string, request: string) {
    super(`Message: ${message}. Request: '${request}'.`);
    this.request = request;
    this.message = message;
  }
}

export default Neo4jNoResults;
