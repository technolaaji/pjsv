import ora from 'ora'

/**
 * Spinner - outputs a spinner to be showed on the screen with text provided
 * @param text
 * @returns void
 */
const spinnerExecutable = (text: string): void => {
  const spinner = ora(text).start()

  setTimeout(() => {
    spinner.stop()
  }, 1000)
}

export default spinnerExecutable
