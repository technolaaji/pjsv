import { retrieveVersion } from '../util/jsonfile'

export const versionNumber = () => {
  return retrieveVersion()
}

export const retrieveMajor = async () => {
  const version = await retrieveVersion()
  return Number(version.split('.')[0])
}

export const retrieveMinor = async () => {
  const version = await retrieveVersion()
  return Number(version.split('.')[1])
}

export const retrievePatch = async () => {
  const version = await retrieveVersion()
  return Number(version.split('.')[2])
}

export const retrieveVersionObject = async () => {
  const major = await retrieveMajor()
  const minor = await retrieveMinor()
  const patch = await retrievePatch()
  return {
    major,
    minor,
    patch,
  }
}
