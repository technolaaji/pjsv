import chalk from 'chalk'

/**
 * Color - return a colored text to be used
 * @param color
 * @param text
 * @returns string
 */
const colors = (color: string, text: string) => {
  switch (color) {
    case 'yellow':
      return chalk.yellow(text)
    case 'green':
      return chalk.green(text)
    case 'red':
      return chalk.red(text)
    case 'redbg':
      return chalk.bgRed(text)
  }
}

export default colors
