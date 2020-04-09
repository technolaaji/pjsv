import program from '../commands'
import { versionNumber } from './version'
import asciiart from '../util/ascii-art'

export const bootstrap = async () => {
  const version = await versionNumber()
  await asciiart()
  return program.version(version).parse(process.argv)
}

export default bootstrap
