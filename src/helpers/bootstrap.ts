import program from '../commands'
import { versionNumber } from './version'

export const bootstrap = async () => {
  const version = await versionNumber()
  program.version(version).parse(process.argv)
}

export default bootstrap
