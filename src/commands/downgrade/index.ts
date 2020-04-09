import inquirer from 'inquirer'
import colors from '../../util/colors'
import downgradeAccepted from './downgrade-accepted'
import {
  downgradeWarnings,
  thankYouForNotDowngrading,
} from '../../util/constants'

export default async (): Promise<any> => {
  downgradeWarnings()

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
    downgradeAccepted()
  } else {
    thankYouForNotDowngrading()
  }
}
