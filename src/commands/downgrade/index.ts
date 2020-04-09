import inquirer from 'inquirer'
import colors from '../../util/colors'

export default async () => {
  console.log(
    colors(
      'yellow',
      'what downgrading does is that it just decreses your version by 1',
    ),
  )
  console.log(
    colors(
      'yellow',
      'this does not mean that it will revert your code using git, just decreasing your package json version by 1',
    ),
  )
  console.log(
    colors('yellow', 'consider reverting back to a previous commit using git'),
  )
  console.log(
    colors(
      'redbg',
      'If you know what you are doing then proceed but downgrading your package json file might cause code breakage so do it on your own risk',
    ),
  )
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
