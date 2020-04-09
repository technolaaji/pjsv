import inquirer from 'inquirer'
import { downgradeChoices } from '../../util/constants'
import downgradeMajor from './downgrade-major'
import downgradeMinor from './downgrade-minor'
import downgradePatch from './downgrade-patch'

export default async () => {
  const chosenOption = await inquirer.prompt([
    {
      type: 'list',
      name: 'downgrade',
      message: 'What type of downgrade you wish to proceed with ?',
      choices: [
        downgradeChoices.Major,
        downgradeChoices.Minor,
        downgradeChoices.Patch,
      ],
    },
  ])
  switch (chosenOption.downgrade) {
    case downgradeChoices.Major:
      downgradeMajor()
      break
    case downgradeChoices.Minor:
      downgradeMinor()
      break
    case downgradeChoices.Patch:
      downgradePatch()
      break
  }
}
