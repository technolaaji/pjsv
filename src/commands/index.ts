import program from '../util/commander'
import upgrade from './upgrade'
const commandList = program

commandList
  .command('upgrade')
  .description("Uprades your package json's version")
  .action(() => {
    upgrade()
  })

commandList
  .command('downgrade')
  .description("Downgrades your package json's version")
  .action(() => {
    console.log('downgrade')
  })

export default commandList
