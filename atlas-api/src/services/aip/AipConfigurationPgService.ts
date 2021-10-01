import { AipConfiguration } from "@interfaces/aip/AipConfiguration";
import PoolManager from "@postgres/PoolManager";

export default class AipConfigurationPgService {
  /**
   * Test an AIP configuration
   * @param configuration Configuration to test
   */
  public testConnection(configuration: AipConfiguration): Promise<boolean> {
    return PoolManager.testConnection(configuration);
  }
}
