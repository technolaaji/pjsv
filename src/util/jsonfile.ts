import jsonfile from 'jsonfile'
import { directoryExecutedPath } from './constants'

export const readPackage = async () => {
  try {
    const data = await jsonfile.readFile(
      `${directoryExecutedPath}/package.json`,
    )
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}

export const retrieveVersion = async () => {
  try {
    const data = await jsonfile.readFile(
      `${directoryExecutedPath}/package.json`,
    )
    return String(data.version)
  } catch (e) {
    console.log(e)
  }
}
