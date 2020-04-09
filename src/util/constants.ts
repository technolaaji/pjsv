import colors from './colors'
/**
 * Executed Directory Path - the path that you have executed PJSV
 * @returns string
 */
export const directoryExecutedPath: string = process.cwd()

/**
 * Choices - used in the upgrade command
 * @returns object
 */
export const choices = {
  Major: 'Major Release - Changes that break backward compatibility',
  Minor: 'Minor Release - Backward compatible new features',
  Patch: 'Patch Release - Backward compatible bug fixes',
}
/**
 * Downgrade Choices - used in the downgrade command
 * @returns object
 */
export const downgradeChoices = {
  Major: 'Major Downgrade - Decreases the major version by one',
  Minor: 'Minor Downgrade - Decreases the minor version by one',
  Patch: 'Patch Downgrade - Decreases the patch version by one',
}
/**
 * Zero or Below Warning - used to log on the console when a value is zero or under zero
 * @returns void
 *
 */
export const zeroOrBelowWarning = (): void => {
  console.log(colors('red', 'You cannot decrease your version below zero'))
}
/**
 * No Downgrade Message - logs on the console when the user chooses "no" as the value of downgrading
 * @returns void
 */
export const thankYouForNotDowngrading = (): void => {
  console.log(
    colors(
      'green',
      'Thank you. Consider using the downgrade when needed, otherwise revert back to previous commits using git',
    ),
  )
}
/**
 * Downgrade Warnings - returns a series of warnings to inform of the user before downgrading
 * @returns void
 */
export const downgradeWarnings = (): void => {
  console.log(
    colors(
      'yellow',
      'what downgrading does is that it just decreses your version by 1',
    ),
  )
  console.log(
    colors(
      'yellow',
      'this does not mean that it will revert your code using git, just decreasing your package json version by 1',
    ),
  )
  console.log(
    colors(
      'yellow',
      'consider reverting back to a previous commit using git since it also reverts back the version as well',
    ),
  )
  console.log(
    colors(
      'redbg',
      'If you know what you are doing then proceed but downgrading your package json file might cause code breakage so do it on your own risk',
    ),
  )
}
/**
 * No Package Json Warning - logs to the console when the jsonfile library cannot find your package.json file
 * @returns void
 */
export const noPackageJsonWarning = (): void => {
  console.log(
    colors('red', 'There is no package json in this current directory'),
  )
}
/**
 * Retreieve Version Warning - logs to the console when package.json's version is not available or when jsonfile library cannot read package.json
 * @returns void
 */
export const retrieveVersionWarning = (): void => {
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
/**
 * Writing to Package Json Warning - logs on the server when jsonfile cannot write to package.json (either package.json is not available or something wrong happened with the jsonfile library)
 */
export const cannotWriteToPackageJsonWarning = (): void => {
  console.log(
    colors(
      'red',
      'you cannot write in a place where package json does not exist',
    ),
  )
}
