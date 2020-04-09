import { readPackage, writePackage } from './jsonfile'
import { retrieveVersionObject } from './version'
import spinner from '../util/spinner'

export default async (type) => {
  const pkg = await readPackage()
  const version = await retrieveVersionObject()
  spinner("Updating your package json's version")
  let tempVersion = { ...version }
  switch (type) {
    case 'major':
      tempVersion = { major: version.major + 1, minor: 0, patch: 0 }
      break
    case 'minor':
      tempVersion = { ...tempVersion, minor: version.minor + 1 }
      break
    case 'patch':
      tempVersion = { ...tempVersion, patch: version.patch + 1 }
      break
  }
  const versionString = `${tempVersion.major}.${tempVersion.minor}.${tempVersion.patch}`
  const newPkg = { ...pkg, version: versionString }
  writePackage(newPkg)
}
