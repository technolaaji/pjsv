import jsonfile from 'jsonfile'
import {
  directoryExecutedPath,
  noPackageJsonWarning,
  retrieveVersionWarning,
  cannotWriteToPackageJsonWarning,
} from '../util/constants'

export const readPackage = async (): Promise<any> => {
  try {
    const data = await jsonfile.readFile(
      `${directoryExecutedPath}/package.json`,
    )
    return data
  } catch (e) {
    noPackageJsonWarning()
  }
}

export const retrieveVersion = async (): Promise<string> => {
  try {
    const data = await readPackage()
    return String(data.version)
  } catch (e) {
    retrieveVersionWarning()
  }
}

export const writePackage = async (payload: object): Promise<void> => {
  try {
    await jsonfile.writeFile(`${directoryExecutedPath}/package.json`, payload, {
      spaces: 2,
    })
  } catch (e) {
    cannotWriteToPackageJsonWarning()
  }
}
