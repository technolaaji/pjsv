import { readPackage, writePackage } from './jsonfile'
import { retrieveVersionObject } from './version'
import spinner from '../util/spinner'

/**
 * Updater - updates your package.json based on the type provided
 * @param type
 * @returns Promise<any>
 */
const updater = async (type: string): Promise<any> => {
  /**
   * Grabs your package.json data
   */
  const pkg = await readPackage()
  /**
   * Retrieves your package.json version as an object containing 3 properties: major/minor/patch
   */
  const version = await retrieveVersionObject()
  /**
   * Shows spinner to user to show that updating is under progress
   */
  spinner("Updating your package json's version")
  /**
   * Creates a new version of the version object to prevent mutation on the original version object
   */
  let tempVersion = { ...version }
  switch (type) {
    case 'major':
      /**
       * If the update type is a major then it will remove the minor and patch since it is a newer version so you would push new features or bug fixes on that major release
       */
      tempVersion = { major: version.major + 1, minor: 0, patch: 0 }
      break
    case 'minor':
      tempVersion = { ...tempVersion, minor: version.minor + 1 }
      break
    case 'patch':
      tempVersion = { ...tempVersion, patch: version.patch + 1 }
      break
  }
  /**
   * Creates a template string to be used in your package.json
   */
  const versionString = `${tempVersion.major}.${tempVersion.minor}.${tempVersion.patch}`
  /**
   * Creates a new object extending your package.json data but replacing the version with the newly updated version
   */
  const newPkg = { ...pkg, version: versionString }
  /**
   * Modify your package.json with the newly updated data
   */
  writePackage(newPkg)
}

export default updater
