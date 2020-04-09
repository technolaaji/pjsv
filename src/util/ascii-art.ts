import figlet from 'figlet'
/**
 * ASCII art function
 * @returns void
 *
 */
const asciiart = (): void => {
  console.log(figlet.textSync('PJSV', { horizontalLayout: 'full' }))
}

export default asciiart
