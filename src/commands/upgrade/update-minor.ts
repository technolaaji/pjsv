import updater from '../../helpers/updater'
/**
 * Minor Update - updates the minor version of your package.json
 * @returns void
 */
const minor = (): void => {
  updater('minor')
}

export default minor
