/* eslint-disable max-len */

import User from "@interfaces/security/general/User";
import { DecodeResult, EncodeResult, Session } from "@interfaces/security/token/Token";
import * as jwt from "jsonwebtoken";
import fs from "fs";
import { getKeyPath } from "@utils/Configuration/ConfigurationUtil";
import { logger } from "@shared/Logger";

export default class TokenService {
  private static INSTANCE: TokenService = null;
  private privateKey: string;
  private publicKey: string;

  private algorithm = "HS512";

  /**
   * Singleton private constructor
   */
  private constructor() {
    // pass
  }

  /**
   * Get the instance of the Token service
   */
  public static getInstance(): TokenService {
    return this.INSTANCE;
  }

  /**
   * Initialize the Token Service
   */
  public static initialize(): void {
    if (this.INSTANCE == null) {
      this.INSTANCE = new TokenService();
    }

    const privateKeyPath = getKeyPath() + "\\private.key";
    const publicKeyPath = getKeyPath() + "\\public.pem";

    // Private key
    if (fs.existsSync(privateKeyPath)) {
      this.INSTANCE.privateKey = fs.readFileSync(privateKeyPath, { encoding: "utf-8" }).replace(/\\n/gm, "");

      logger.info("TokenService - The private key has been discovered, and loaded.");
    } else {
      // Log the error + Stop the server
      logger.error(
        `TokenService - Failed to find the private key file.
         Please make sure the file exists at ${privateKeyPath}.`,
      );
    }

    // Public key
    if (fs.existsSync(publicKeyPath)) {
      this.INSTANCE.publicKey = fs.readFileSync(publicKeyPath, { encoding: "utf-8" }).replace(/\\n/gm, "");

      logger.info("TokenService - The public key has been discovered, and loaded.");
    } else {
      // Log the error + Stop the server
      logger.error(
        `TokenService - Failed to find the private key file.
         Please make sure the file exists at ${publicKeyPath}.`,
      );
    }
  }

  /**
   * Convert a encoded
   * @param {EncodeResult} session Session to convert to base 64
   * @return {string} Base64 string of the token serialize
   */
  public static encodedResultToBase64(session: EncodeResult): string {
    const objJsonStr: string = JSON.stringify(session);
    return Buffer.from(objJsonStr).toString("base64");
  }

  /**
   * Base64 to EncodeResult
   * @param {string} serializeToken Base 64 to EncodeResult
   * @return {EncodeResult} Token
   */
  public static base64ToEncodedResult(serializeToken: string): EncodeResult {
    try {
      const buff = Buffer.from(serializeToken, "base64");
      const resultAsString = buff.toString("ascii");
      return JSON.parse(resultAsString) as EncodeResult;
    } catch (err) {
      throw new Error("Invalid token");
    }
  }

  /**
   * Create a token based on a user
   * @param {User} user User
   * @return {string} Token for the user
   */
  public createUserToken(user: User): EncodeResult {
    const issued = Date.now();
    const oneHourInMs = 60 * 60 * 1000;
    const expires = issued + oneHourInMs;

    const session: Session = {
      issued: issued,
      expires: expires,
      role: user.role,
      name: user.username,
    };

    return {
      token: jwt.sign(session, this.privateKey, { algorithm: "RS512", expiresIn: oneHourInMs }),
      issued: issued,
      expires: expires,
    };
  }

  /**
   * Deserialize and verify the validity of the session
   * @param {string} token Token to deserialize
   * @return {DecodeResult} The decoded token
   */
  public deserializeSession(token: string): DecodeResult {
    let result: Session;

    try {
      const verifiedToken: string | Object = jwt.verify(token, this.privateKey, {
        algorithms: ["RS256", "RS384", "RS512"],
      });
      if (verifiedToken instanceof Object) {
        result = verifiedToken as Session;
      } else {
        result = JSON.parse(verifiedToken) as Session;
      }
    } catch (_e: any) {

      if (_e.message === "invalid token" || _e.message === "jwt malformed") {
        return {
          type: "invalid-token",
        };
      }

      if (_e.message === "jwt signature is required") {
        return {
          type: "integrity-error",
        };
      }

      // Handle json parse errors, thrown when the payload is nonsense
      if (_e.message.indexOf("Unexpected token") === 0) {
        return {
          type: "invalid-token",
        };
      }

      throw _e;
    }

    return {
      type: "valid",
      session: result,
    };
  }
}
