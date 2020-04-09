import { readPackage, writePackage } from './jsonfile'
import { retrieveVersionObject } from './version'
import spinner from '../util/spinner'
import decreaseByOne from './decreaseByOne'

/**
 * Downgrader - decrease the number of a specific version type then writes it to the project's package.json
 * @param type
 * @returns Promise<any>
 */
const downgrader = async (type: string): Promise<any> => {
  /**
   * Grabs your package.json details
   */
  const pkg = await readPackage()
  /**
   * Grabs your package.json version and returns an object that has 3 values: major/minor/patch
   */
  const version = await retrieveVersionObject()
  /**
   * Loads the spinner for the user to know that the function is still under execution
   */
  spinner("Updating your package json's version")
  /**
   * Creates a new version of the version object to prevent mutability and if any changes occur then it doesn't mutate the version object
   */
  let tempVersion = { ...version }
  /**
   * Based on the type, it decreases the specific type number but keeping the rest intact
   */
  switch (type) {
    case 'major':
      tempVersion = { ...tempVersion, major: decreaseByOne(version.major) }
      break
    case 'minor':
      tempVersion = { ...tempVersion, minor: decreaseByOne(version.minor) }
      break
    case 'patch':
      tempVersion = { ...tempVersion, patch: decreaseByOne(version.patch) }
      break
  }
  /**
   * Creates a string with all the version types to be replaced in the package.json
   */
  const versionString = `${tempVersion.major}.${tempVersion.minor}.${tempVersion.patch}`
  /**
   * Extends the existing package.json properties but updating the version section
   */
  const newPkg = { ...pkg, version: versionString }
  /**
   * Writes the newly modified package.json data to the actual package.json
   */
  writePackage(newPkg)
}

export default downgrader
