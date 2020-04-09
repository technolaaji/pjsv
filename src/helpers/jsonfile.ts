import jsonfile from 'jsonfile'
import { directoryExecutedPath } from '../util/constants'
import colors from '../util/colors'

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
    console.log(
      colors('red', 'Please use the command where a package json is location'),
    )
    console.log(
      colors(
        'yellow',
        'if you see that this issue progresses even if you execute it in the right place, kindly send a pull request on github',
      ),
    )
  }
}

export const writePackage = async (payload) => {
  try {
    await jsonfile.writeFile(`${directoryExecutedPath}/package.json`, payload, {
      spaces: 2,
    })
  } catch (e) {
    console.log(
      colors(
        'red',
        'you cannot write in a place where package json does not exist',
      ),
    )
  }
}
