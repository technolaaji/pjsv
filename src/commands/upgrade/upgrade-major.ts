import updater from '../../helpers/updater'
/**
 * Major Update - updates the major version of your package.json
 */
const major = (): void => {
  updater('major')
}

export default major
