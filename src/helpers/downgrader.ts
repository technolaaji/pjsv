import { readPackage, writePackage } from './jsonfile'
import { retrieveVersionObject } from './version'
import spinner from '../util/spinner'
import decreaseByOne from './decreaseByOne'

export default async (type) => {
  const pkg = await readPackage()
  const version = await retrieveVersionObject()
  spinner("Updating your package json's version")
  let tempVersion = { ...version }
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
  const versionString = `${tempVersion.major}.${tempVersion.minor}.${tempVersion.patch}`
  const newPkg = { ...pkg, version: versionString }
  writePackage(newPkg)
}
