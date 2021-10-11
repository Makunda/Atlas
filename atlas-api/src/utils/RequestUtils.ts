import { Response, Request } from "express";
import User from "@interfaces/security/general/User";
import Role from "@interfaces/security/general/Role";
import LocalLoginService from "@services/security/login/LocalLoginService";

/**
 * Get the user from the authenticated response
 * @throws An error if the user doesn't exist
 */
export function getAuthenticatedUser(res: Response): User {
  if (!res.locals.user) throw Error("Response was not authenticated");
  return res.locals.user as User;
}

/**
 * Verify the role of the user
 * @throws An error if the user doesn't exist
 */
export function isUserAllowed(req: Request, res: Response): boolean {
  if (!res.locals.user) return false;
  const user = res.locals.user as User;

  // Verify the role
  const localLoginService = LocalLoginService.getInstance();
  const role: Role | null = localLoginService.getRole(user.role);

  if (!role) throw new Error(`The Role of the user hasn't been declared. Role: '${user.role}'.`);

  let regexp;
  const route = req.path;
  for (const s in role.scope) {
    regexp = new RegExp(s, "i"); // Regex created based on the scope previously defined
    if (regexp.test(route)) return true;
  }

  // Test failed, block the route
  return false;
}

/**
 * Apply the user session on the resonse
 * @param res The response processed
 */
export function applyUserSession(res: Response, user: User): Response {
  res.locals.user = user;
  return res;
}
