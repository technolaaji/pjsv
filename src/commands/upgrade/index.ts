import inquirer from 'inquirer'
import { choices } from '../../util/constants'
import upgradeMajor from './upgrade-major'
import upgradeMinor from './update-minor'
import upgradePatch from './update-patch'

export default async (): Promise<any> => {
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
      upgradeMajor()
      break
    case choices.Minor:
      upgradeMinor()
      break
    case choices.Patch:
      upgradePatch()
      break
  }
}
