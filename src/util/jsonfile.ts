import jsonfile from 'jsonfile'
import { directoryExecutedPath } from './constants'
import colors from './colors'

export const readPackage = async () => {
  try {
    const data = await jsonfile.readFile(
      `${directoryExecutedPath}/package.json`,
    )
    return data
  } catch (e) {
    console.log(
      colors('red', 'There is no package json in this current directory'),
    )
  }
}

export const retrieveVersion = async () => {
  try {
    const data = await readPackage()
    return String(data.version)
  } catch (e) {
    console.log(colors('red', ''))
  }
}
