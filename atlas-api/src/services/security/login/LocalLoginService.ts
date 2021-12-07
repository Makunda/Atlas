import { logger } from "@shared/Logger";
import fs from "fs";
import { getConfigurationPath } from "@utils/Configuration/ConfigurationUtil";
import UserLocal from "@interfaces/security/local/UserLocal";
import RoleLocal from "@interfaces/security/local/RoleLocal";
import Role from "@interfaces/security/general/Role";
import User from "@interfaces/security/general/User";

/**
 * Service managing the login of the user
 * The login is now limited to the local rules defined in the config/security/* folder
 */
export default class LocalLoginService {
  // Singleton instance
  private static INSTANCE: LocalLoginService = new LocalLoginService();
  // Private
  private users: UserLocal[] = [];
  private roles: RoleLocal[] = [];

  /**
   * Private constructor
   */
  private constructor() {
    // Pass
    this.readConfigFile();
  }

  /**
   * Get the instance of the login framework
   */
  public static getInstance(): LocalLoginService {
    return this.INSTANCE;
  }

  // Declaring the parameters
  private static SECURITY_CONFIG_FOLDER(): string {
    return "security\\";
  }

  private static SECURITY_USER(): string {
    return "security-local-users.json";
  }

  private static SECURITY_ROLE(): string {
    return "security-local-roles.json";
  }

  /**
   * Get the list of user
   * @returns The list of user
   */
  public getUsers(): UserLocal[] {
    return this.users;
  }

  /**
   * Get the list of user
   * @returns The list of user
   */
  public getRoles(): RoleLocal[] {
    return this.roles;
  }

  /**
   * Verify then existence of a Role
   * @param role Role to check
   */
  public existRole(role: string): boolean {
    for (const r of this.roles) {
      if (role === r.name) return true;
    }
    return false;
  }

  /**
   * Verify then existence of a Role
   * @param role Role to check as a string
   */
  public getRole(role: string): Role | null {
    for (const r of this.roles) {
      if (role === r.name) return r;
    }
    return null;
  }

  /**
   * Verify if the login provided is correct
   * @param role Role to check
   */
  public getUser(username: string, password: string): User | null {
    for (const u of this.users) {
      if (u.username === username && u.password === password) return u;
    }
    return null;
  }

  /**
   * Read the configuration file
   */
  private readConfigFile(): void {
    logger.info(`Reading configuration path on ${getConfigurationPath()}`);

    const securityFolder: string = getConfigurationPath() + LocalLoginService.SECURITY_CONFIG_FOLDER();
    const userPath: string = securityFolder + LocalLoginService.SECURITY_USER();
    const rolePath: string = securityFolder + LocalLoginService.SECURITY_ROLE();

    // Verify if the files exists
    // Role file
    if (fs.existsSync(rolePath)) {
      const content = fs.readFileSync(rolePath, "utf-8");
      this.roles = JSON.parse(content) as RoleLocal[];

      logger.info("LocalLogin - Role configuration has been loaded.");
    } else {
      // Log the error + Stop the server
      logger.error(`LocalLogin - Failed to find the role file. 
      Please make sure the ${LocalLoginService.SECURITY_ROLE()} at ${rolePath}.`);
    }
    logger.info(`LocalLogin - Role configuration has been loaded. ${this.roles.length} users have been loaded.`);

    // User path
    if (fs.existsSync(userPath)) {
      const content = fs.readFileSync(userPath, "utf-8");
      const tempUser = JSON.parse(content) as UserLocal[];
      for (const us of tempUser) {
        // If the role not exist, create a warning and ignore the user
        if (!this.existRole(us.role)) {
          logger.warn(`LocalLogin - Failed to load user : '${us.username}'. Incorrect role assigned.`);
        } else {
          // The user is valid
          this.users.push(us);
        }
      }

      logger.info(`LocalLogin - User configuration has been loaded. ${this.users.length} users have been loaded.`);
    } else {
      // Log the error + Stop the server
      logger.error(
        `LocalLogin - Failed to find the role file.
         Please make sure the ${LocalLoginService.SECURITY_USER()} at ${userPath}.`,
      );
    }
  }
}
