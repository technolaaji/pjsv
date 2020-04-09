import downgrader from '../../helpers/downgrader'

/**
 * Downgrade Minor - downgrades the minor version
 * @returns void
 */
const downgradeMinor = (): void => {
  downgrader('minor')
}

export default downgradeMinor
