import { AipConfiguration } from "@modules/aip/interfaces/AipConfiguration";
import PoolManager from "@postgres/PoolManager";

/**
 * Utility class for communication
 */
export default class CommunicationUtil {
  /**
   * Test an AIP configuration
   * @param configuration Configuration to test
   */
  public static testConnection(configuration: AipConfiguration): Promise<boolean> {
    return PoolManager.testConnection(configuration);
  }
}
