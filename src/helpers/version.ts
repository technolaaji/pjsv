import { retrieveVersion } from './jsonfile'

/**
 * Version Number - returns your package.json version number
 * @returns Promise<string>
 */
export const versionNumber = (): Promise<string> => {
  return retrieveVersion()
}
/**
 * Retrieve Major - returns the major number of your package.json version
 * @returns Promise<number>
 */
export const retrieveMajor = async (): Promise<number> => {
  const version = await retrieveVersion()
  /**
   * The major number is the first number in the version string
   */
  return Number(version.split('.')[0])
}
/**
 * Retrieve Minor - returns the minor number of your package.json version
 * @returns Promise<number>
 */
export const retrieveMinor = async (): Promise<number> => {
  const version = await retrieveVersion()
  /**
   * The minor number is the second number in the version string
   */
  return Number(version.split('.')[1])
}
/**
 * Retrieve Patch - returns the patch number of your package.json version
 * @returns Promise<number>
 */
export const retrievePatch = async (): Promise<number> => {
  const version = await retrieveVersion()
  /**
   * The patch number is the third and last number in the package.json version
   */
  return Number(version.split('.')[2])
}
/**
 * Retrieve Version Object - returns an object that contains the major/minor/patch of your package.json to be used in other functions
 * @returns Promise<any> - a proxy of the object
 */
export const retrieveVersionObject = async (): Promise<any> => {
  /**
   * Retrieves the major number
   */
  const major = await retrieveMajor()
  /**
   * Retrieves the minor number
   */
  const minor = await retrieveMinor()
  /**
   * Retrieves the patch number
   */
  const patch = await retrievePatch()
  /**
   * Returns an object that contains the major/minor/and patch to be used in other functions
   */
  return {
    major,
    minor,
    patch,
  }
}
