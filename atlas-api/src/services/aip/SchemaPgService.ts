/* eslint-disable @typescript-eslint/no-unsafe-call */
import { AipConfiguration } from "@interfaces/aip/AipConfiguration";
import PoolManager from "@postgres/PoolManager";

/**
 * Class managing the relations to postgres for the Schema management
 */
export default class SchemaPgService {
  /**
   * Get the list of the schema in one database
   * @param configuration Configuration of AIP to query
   */
  public async getSchema(configuration: AipConfiguration): Promise<string[]> {
    // Open pool
    const pool: string = PoolManager.openPool(configuration);
    const row = await PoolManager.queryPool(
      pool,
      "select nspname as schema_name from pg_catalog.pg_namespace WHERE NOT nspname LIKE 'pg_%';"
    );
    const results = row.map((x) => String(x.schema_name));
    return results;
  }
}
