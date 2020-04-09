import inquirer from 'inquirer'
import colors from '../../util/colors'

export default async () => {
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
    console.log('yes')
  } else {
    console.log('no')
  }
}
