import figlet from 'figlet'

export default (): void => {
  console.log(figlet.textSync('PJSV', { horizontalLayout: 'full' }))
}
