/* eslint-disable @typescript-eslint/no-unsafe-return */
import LocalLoginService from "@services/security/login/LocalLoginService";
import TokenService from "@services/security/TokenService";
import { logger } from "@shared/Logger";
import { HttpCode } from "@utils/HttpCode";
import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

/**
 * Manage the login of the user and the creation of token
 * @todo Should handle multiple type of authentication
 */
export default class LoginController {
  private localLoginService = LocalLoginService.getInstance();
  private tokenService = TokenService.getInstance();

  /**
   * Log the user and return a JWT if the login is successful
   */
  public postLogin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await body("username", "You need to provide a username.").isString().run(req);
      await body("password", "You need to provide a password.").isString().run(req);

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(HttpCode.BAD_REQUEST).send({ errors: errors.array().map(x => x.msg), message: "Failed to login. Incorrect parameters" });
        return;
      }

      // If no error check if the user exists
      const username = String(req.body.username);
      const password = String(req.body.password);

      const user = this.localLoginService.getUser(username, password);
      if (user) {
        // User is authenticated
        // Generate Token
        const token = this.tokenService.createUserToken(user);
        res.status(HttpCode.ACCEPTED).send({ data: token, message: "Successful login" });
      } else {
        // Send error
        res.status(HttpCode.ACCESS_REFUSED).send({ error: ["Bad username/password"], message: "Failed to login. Bad username/password" });
      }
    } catch (error) {
      logger.error("Failed to log the user.", error);
      res.status(HttpCode.ACCESS_REFUSED).send({ error: ["Internal error"], message: "Failed to login." });
    }
  };
}
