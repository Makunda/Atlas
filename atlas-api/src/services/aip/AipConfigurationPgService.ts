import { AipConfiguration } from "@interfaces/aip/AipConfiguration";
import PoolManager from "src/postgres/PoolManager";

export default class AipConfigurationPgService {
  /**
   * Test an AIP configuration
   * @param configuration Configuration to test
   */
  public async testConnection(
    configuration: AipConfiguration,
  ): Promise<boolean> {
    return PoolManager.testConnection(configuration);
  }
}
