import downgrader from '../../helpers/downgrader'

/**
 * Downgrade Patch - downgrades the patch version
 */
const downgradePatch = (): void => {
  downgrader('patch')
}

export default downgradePatch
