import jsonfile from 'jsonfile'
import {
  directoryExecutedPath,
  noPackageJsonWarning,
  retrieveVersionWarning,
  cannotWriteToPackageJsonWarning,
} from '../util/constants'
/**
 * Read Package - reads your package.json and returns it to be used later on
 * @returns Promise<any> - a proxy of the object
 */
export const readPackage = async (): Promise<any> => {
  try {
    /**
     * Reads your package.json
     */
    const data = await jsonfile.readFile(
      `${directoryExecutedPath}/package.json`,
    )
    /**
     * Returns a proxy version of the object since it is a promise
     */
    return data
  } catch (e) {
    /**
     * Logs on the console if package.json is not found in the directory you have executed the command in
     */
    noPackageJsonWarning()
  }
}
/**
 * Retrieve Version - returns the version property from your package.json
 * @returns Promise<any> - a proxy of the string taken from the object returned from the readPackage function
 */
export const retrieveVersion = async (): Promise<string> => {
  try {
    /**
     * Retrieves your package.json object
     */
    const data = await readPackage()
    /**
     * Returns a string that contains your package.json version number
     */
    return String(data.version)
  } catch (e) {
    /**
     * Logs on the console if it didn't find the version in your package.json or jsonfile couldn't find your package.json
     */
    retrieveVersionWarning()
  }
}
/**
 * Write Package - writes to your package.json the payload that was passed to it
 * @param payload
 */
export const writePackage = async (payload: object): Promise<void> => {
  try {
    await jsonfile.writeFile(`${directoryExecutedPath}/package.json`, payload, {
      spaces: 2,
    })
  } catch (e) {
    /**
     * Logs on the console when jsonfile couldn't write your changes, either it couldn't find your package.json or something else happened behind the scene
     */
    cannotWriteToPackageJsonWarning()
  }
}
