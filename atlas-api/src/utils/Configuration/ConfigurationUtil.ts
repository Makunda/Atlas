/**
 * Get the path to the configuration folder
 * @returns Path to the config foler as ./config/
 */
export function getConfigurationPath(): string {
  return process.cwd() + "\\config\\";
}

/**
 * Get the path to the keys folder
 * @return Absolute path to config\keys\
 */
export function getKeyPath(): string {
  return process.cwd() + "\\config\\keys\\";
}
