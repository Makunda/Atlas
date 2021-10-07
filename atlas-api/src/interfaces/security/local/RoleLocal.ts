import Role from "../general/Role";

/**
 * Role of the local security
 */
export default interface RoleLocal extends Role {
  name: string;
  scope: string[];
}
