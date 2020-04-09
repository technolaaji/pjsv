import inquirer from 'inquirer'
import colors from '../../util/colors'
import downgradeAccepted from './downgrade-accepted'
import {
  downgradeWarnings,
  thankYouForNotDowngrading,
} from '../../util/constants'

/**
 * Downgrade - prompts the user if he/she is sure about the downgrade then downgrades based on the stage the user have chosen
 * @returns Promise<any>
 */
const downgrade = async (): Promise<any> => {
  /**
   * A list of warnings informing the user before updating, we are not responsible for any issues that gets generated afterwards. You have been warned
   */
  downgradeWarnings()
  /**
   * Prompts the user with a simple yes/no question to make sure if he/she wants to upgrade
   */
  const confirmation = await inquirer.prompt([
    {
      type: 'list',
      name: 'agreement',
      message: `${colors(
        'yellow',
        'Are you sure you want to proceed with downgrading your package.json ?',
      )} - ${colors('red', 'We are not responsible after this point')}`,
      choices: ['yes', 'no'],
    },
  ])

  if (confirmation.agreement === 'yes') {
    /**
     * Executes the downgrade function if the user accepted to downgrade
     */
    downgradeAccepted()
  } else {
    /**
     * Executes a function that prompts the user of not downgrading if the user chose no as an answer
     */
    thankYouForNotDowngrading()
  }
}

export default downgrade
