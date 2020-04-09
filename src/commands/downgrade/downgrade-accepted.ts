import inquirer from 'inquirer'
import { downgradeChoices } from '../../util/constants'
import downgradeMajor from './downgrade-major'
import downgradeMinor from './downgrade-minor'
import downgradePatch from './downgrade-patch'

/**
 * Downgrade Accepted - if the user chose yes in the downgrade prompt then he/she will be prompted again to choose which stage to downgrade
 */
const downgradeAccepted = async (): Promise<any> => {
  /**
   * Prompts the user to choose a specific stage to downgrade
   */
  const chosenOption = await inquirer.prompt([
    {
      type: 'list',
      name: 'downgrade',
      message: 'What type of downgrade you wish to proceed with ?',
      /**
       * A list of stage options the user can choose to issue a downgrade, it is initialized in the constants file in the utils folder
       */
      choices: [
        downgradeChoices.Major,
        downgradeChoices.Minor,
        downgradeChoices.Patch,
      ],
    },
  ])
  switch (chosenOption.downgrade) {
    case downgradeChoices.Major:
      /**
       * Downgrade major if the user decided to downgrade the major version
       */
      downgradeMajor()
      break
    case downgradeChoices.Minor:
      /**
       * Downgrade minor if the user decided to downgrade the minor version
       */
      downgradeMinor()
      break
    case downgradeChoices.Patch:
      /**
       * Downgrade patch if the user decided to downgrade the patch version
       */
      downgradePatch()
      break
  }
}

export default downgradeAccepted
