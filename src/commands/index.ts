import program from '../helpers/commander'
import upgrade from './upgrade'
import downgrade from './downgrade'

/**
 * Command List - extends on top of the commander library and it contains all of the commands that are going to be used by the user
 * @returns commander
 */
const commandList = program
/**
 * Upgrade command - the command that is responsible for upgrading your package.json. you will be using this the most
 */
commandList
  .command('upgrade')
  .description("Uprades your package json's version")
  .action(() => {
    /**
     * Executes the upgrade function that will prompt the user to choose a specific stage to upgrade
     */
    upgrade()
  })
/**
 * Downgrade command - the command that is responsible for downgrading your package.json. you will rarely use it unless you really have to
 */
commandList
  .command('downgrade')
  .description("Downgrades your package json's version")
  .action(() => {
    /**
     * Executes the downgrade function that will prompt the user to make sure of his/her option. if yes then the user will be prompted to choose which stage to downgrade
     */
    downgrade()
  })

export default commandList
