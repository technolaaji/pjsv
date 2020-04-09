import chalk from 'chalk'

export default (color: string, text: string) => {
  switch (color) {
    case 'yellow':
      return chalk.yellow(text)
    case 'green':
      return chalk.green(text)
    case 'red':
      return chalk.red(text)
  }
}
