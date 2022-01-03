import User from "../general/User";

/**
 * User interfaces of the local security
 */
export default interface UserLocal extends User {
  username: string;
  password: string;
  role: string;
}
