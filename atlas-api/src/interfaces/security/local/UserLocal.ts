import User from "../general/User";

/**
 * User interface of the local security
 */
export default interface UserLocal extends User {
  username: string;
  password: string;
  role: string;
}
