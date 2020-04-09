import colors from './colors'

export const directoryExecutedPath = process.cwd()

export const choices = {
  Major: 'Major Release - Changes that break backward compatibility',
  Minor: 'Minor Release - Backward compatible new features',
  Patch: 'Patch Release - Backward compatible bug fixes',
}

export const downgradeChoices = {
  Major: 'Major Downgrade - Decreases the major version by one',
  Minor: 'Minor Downgrade - Decreases the minor version by one',
  Patch: 'Patch Downgrade - Decreases the patch version by one',
}

export const zeroOrBelowWarning = () => {
  console.log(colors('red', 'You cannot decrease your version below zero'))
}

export const thankYouForNotDowngrading = () => {
  console.log(
    colors(
      'green',
      'Thank you. Consider using the downgrade when needed, otherwise revert back to previous commits using git',
    ),
  )
}

export const downgradeWarnings = () => {
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

export const noPackageJsonWarning = () => {
  console.log(
    colors('red', 'There is no package json in this current directory'),
  )
}

export const retrieveVersionWarning = () => {
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

export const cannotWriteToPackageJsonWarning = () => {
  console.log(
    colors(
      'red',
      'you cannot write in a place where package json does not exist',
    ),
  )
}
