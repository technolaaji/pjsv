import program from '../helpers/commander'
import upgrade from './upgrade'
import downgrade from './downgrade'
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
    downgrade()
  })

export default commandList
