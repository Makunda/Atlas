import { AipConfiguration } from "@interfaces/aip/AipConfiguration";
import config from "config";

import pg from "pg";
import { uuidv4 } from "@utils/utils";

// Pool manager which end the pool connection after an expiration

// Get a pool ID to request id ( as a uuid )

export interface PoolWrapper {
  pool: pg.Pool;
  openedOn: number;
  lastActivity: number;
  open: boolean;
  config: pg.PoolConfig;
}

/**
 * Global configuration of the pools
 */
const poolConfig: any = {
  connectionTimeoutMillis: 20 * 1000,
  idleTimeoutMillis: 0,
  allowExitOnIdle: false,
};

/**
 * Class managing the pool connections
 */
export default class PoolManager {
  private static poolMap = new Map<string, PoolWrapper>();
  private static default_expiration = 30000;

  private static backgroundJob: boolean;
  private static backgroundTimeout: NodeJS.Timeout;

  /**
   * Process the list of pool map
   */
  private static processPoolMap() {
    const now = Date.now();
    const expiration = config.has("postgres.pool.expiration") ? Number(config.get("postgres.pool.expiration")) : 30000;

    this.poolMap.forEach((value: PoolWrapper, key: string) => {
      // Check expiration
      if (value.open && now >= value.lastActivity + expiration) {
        value.pool.end(); // End
        value.open = false;
      }
    });
  }

  /**
   * Query a specific pool
   * @param id Id of the pool to query
   * @param query Query to execute
   * @param params  Parameters
   */
  public static async queryPool(id: string, query: string, params?: any[]): Promise<any[]> {
    const poolWrap = this.getPool(id);
    if (!poolWrap) throw new Error(`The pool with id : ${id} doesn't not exist.`);
    if (!poolWrap.open) poolWrap.pool = new pg.Pool(poolWrap.config);

    poolWrap.lastActivity = Date.now();

    let resp;
    if (params) resp = await poolWrap.pool.query(query, params);
    else resp = await poolWrap.pool.query(query);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return resp.rows;
  }

  /**
   * Launch a background job to monitor the Pools.
   * This job ends if there is no pool in the list or all the pool are ended
   */
  private static startBackgroundJob() {
    this.backgroundTimeout = setInterval(this.processPoolMap.bind(this), 5000);
  }

  /**
   * Find a similar configuration in the list of pool
   * @param configuration Configuration to search
   */
  private static findSimilarPool(configuration: AipConfiguration): string | undefined {
    for (const [key, value] of this.poolMap) {
      if (
        value.config.host == configuration.url &&
        value.config.database == configuration.database &&
        value.config.port == configuration.port &&
        value.config.user == configuration.user
      ) {
        // Return the key if found
        return key;
      }
    }

    return undefined;
  }

  /**
   * Build a PoolConfig configuration
   * @param configuration Configuration of AIP
   */
  private static getConfig(configuration: AipConfiguration): pg.PoolConfig {
    const configPool: pg.PoolConfig = Object.assign({}, poolConfig);
    configPool.host = configuration.url;
    configPool.user = configuration.user;
    configPool.password = configuration.password;
    configPool.database = configuration.database;
    configPool.port = configuration.port;
    return configPool;
  }

  /**
   * Get a pool using the ID created
   * @param {string} id Id of the pool
   */
  public static getPool(id: string): PoolWrapper | undefined {
    if (!this.poolMap.has(id)) return undefined;
    return this.poolMap.get(id);
  }

  /**
   * Test a connection to the Server
   * @param configuration Aip configuration to test
   */
  public static async testConnection(configuration: AipConfiguration): Promise<boolean> {
    let pool: pg.Pool;

    try {
      const configPool = this.getConfig(configuration);
      pool = new pg.Pool(configPool);

      console.debug("Testing connection to : ", configPool);
      await pool.query("SELECT NOW()");
      console.debug("Connection successful");
      return true;
    } catch (err) {
      const uri = `${configuration.url}:${configuration.port}/${configuration.database}`;
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw Error(`Failed to connect to the database ${uri}. Error: ${err}.`);
    } finally {
      if (pool) await pool.end();
    }
  }

  /**
   * Open a new Pool of connection for an AIP configuration.
   * The pool is set to be ended after a delay specified in the configuration file.
   * After this delay passed, it will be ended and reopened if needed.
   * @param configuration Configuration of AIP to treat
   * @returns
   */
  public static openPool(configuration: AipConfiguration): string {
    const configPool: pg.PoolConfig = Object.assign({}, poolConfig);
    configPool.host = configuration.url;
    configPool.user = configuration.user;
    configPool.password = configuration.password;
    configPool.database = configuration.database;
    configPool.port = configuration.port;

    // Verify if a similar pool already exists based
    const key = this.findSimilarPool(configuration);
    if (key) {
      return key; // Pool was found
    }

    const pool = new pg.Pool(configPool);
    const id = uuidv4();

    // Wrap the pool
    const poolWrapped: PoolWrapper = {
      pool: pool,
      openedOn: Date.now(),
      lastActivity: Date.now(),
      open: true,
      config: configPool,
    };

    // Insert in the pool map
    this.poolMap.set(id, poolWrapped);

    // Launch background job is needed
    if (!this.backgroundJob) {
      this.startBackgroundJob();
    }
    return id;
  }
}
