import program from '../commands'
import { versionNumber } from '../util/constants'

export const bootstrap = async () => {
  const version = await versionNumber()
  program.version(version).parse(process.argv)
}

export default bootstrap
