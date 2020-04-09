import downgrader from '../../helpers/downgrader'

/**
 * Downgrade Major - downgrades the major version
 * @returns void
 */
const downgradeMajor = (): void => {
  downgrader('major')
}

export default downgradeMajor
