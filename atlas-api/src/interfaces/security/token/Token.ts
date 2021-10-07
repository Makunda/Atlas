/**
 * Session used in the JWT
 */
export interface Session {
  name: string;
  role: string;
  issued: number;
  expires: number;
}

/**
 * Encoded token
 */
export interface EncodeResult {
  token: string;
  expires: number;
  issued: number;
}

export type PartialSession = Omit<Session, "issued" | "expires">;

export type DecodeResult =
  | {
      type: "valid";
      session: Session;
    }
  | {
      type: "integrity-error";
    }
  | {
      type: "invalid-token";
    };

export type ExpirationStatus = "expired" | "active" | "grace";
