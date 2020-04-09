import inquirer from 'inquirer'
import { choices } from '../../util/constants'

export default async () => {
  const chosenOption = await inquirer.prompt([
    {
      type: 'list',
      name: 'upgrade',
      message: 'What type of update you are pushing?',
      choices: [choices.Major, choices.Minor, choices.Patch],
    },
  ])
  console.log(chosenOption)
}
