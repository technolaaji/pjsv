import ora from 'ora'

export default (text) => {
  const spinner = ora(text).start()

  setTimeout(() => {
    spinner.stop()
  }, 1000)
}
