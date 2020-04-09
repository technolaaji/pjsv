import { retrieveVersion } from './jsonfile'

export const versionNumber = (): Promise<string> => {
  return retrieveVersion()
}

export const retrieveMajor = async (): Promise<number> => {
  const version = await retrieveVersion()
  return Number(version.split('.')[0])
}

export const retrieveMinor = async (): Promise<number> => {
  const version = await retrieveVersion()
  return Number(version.split('.')[1])
}

export const retrievePatch = async (): Promise<number> => {
  const version = await retrieveVersion()
  return Number(version.split('.')[2])
}

export const retrieveVersionObject = async (): Promise<any> => {
  const major = await retrieveMajor()
  const minor = await retrieveMinor()
  const patch = await retrievePatch()
  return {
    major,
    minor,
    patch,
  }
}
