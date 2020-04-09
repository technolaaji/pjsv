import inquirer from 'inquirer'
import { choices } from '../../util/constants'
import upgradeMajor from './upgrade-major'
import upgradeMinor from './update-minor'
import upgradePatch from './update-patch'
/**
 * Upgrade - responsible for upgrading your package.json based on the user's prompt to which stage they want to upgrade
 * @returns Promise<any>
 */
const upgrade = async (): Promise<any> => {
  /**
   * Prompts the user to choose between 3 values: major/minor/patch and based on that chosen value your package.json gets updated
   */
  const chosenOption = await inquirer.prompt([
    {
      type: 'list',
      name: 'upgrade',
      message: 'What type of update you are pushing ?',
      /**
       * The three choices that are initialized in the constant folder, the user chooses one of them to proceed with the upgrade
       */
      choices: [choices.Major, choices.Minor, choices.Patch],
    },
  ])
  switch (chosenOption.upgrade) {
    case choices.Major:
      /**
       * Executes the major version update function if the user chose major
       */
      upgradeMajor()
      break
    case choices.Minor:
      /**
       * Executes the minor version update function if the user chose minor
       */
      upgradeMinor()
      break
    case choices.Patch:
      /**
       * Executes the patch version update function if the user chose patch
       */
      upgradePatch()
      break
  }
}

export default upgrade
