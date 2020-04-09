import inquirer from 'inquirer'
import { choices } from '../../util/constants'

export default async () => {
  const chosenOption = await inquirer.prompt([
    {
      type: 'list',
      name: 'upgrade',
      message: 'What type of update you are pushing ?',
      choices: [choices.Major, choices.Minor, choices.Patch],
    },
  ])
  switch (chosenOption.upgrade) {
    case choices.Major:
      console.log('major')
      break
    case choices.Minor:
      console.log('minor')
      break
    case choices.Patch:
      console.log('patch')
      break
  }
}
