import updater from '../../helpers/updater'
/**
 * Patch Update - updates the patch version of your package.json
 */
const patch = (): void => {
  updater('patch')
}

export default patch
