import program from '../commands'
import { versionNumber } from './version'
import asciiart from '../util/ascii-art'

/**
 * Bootstrap Function - starts the entire application
 * the main function that calls everything including the ascii art as well
 * anything that needed to be executed first should be available here
 * @returns Promise<any>
 */
export const bootstrap = async (): Promise<any> => {
  /**
   * Grabs the version from your package.json
   */
  const version = await versionNumber()
  /**
   * Generates the PJSV ASCII art
   */
  asciiart()
  /**
   * Runs the application using commander
   */
  return program.version(version).parse(process.argv)
}

export default bootstrap
