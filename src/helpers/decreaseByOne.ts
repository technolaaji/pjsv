import checkIfZeroOrBelow from './checkIfZeroOrBelow'
import { zeroOrBelowWarning } from '../util/constants'

/**
 * Decrease by one - decreases the value provided by one but if the value is zero or below then it will not decrease the value
 * @param value
 * @returns value - 1 || 0
 */
const decreaseByOne = (value: number): number => {
  /**
   * using the zero or below checker function and based on the value returns either a true or false
   */
  if (checkIfZeroOrBelow(value)) {
    zeroOrBelowWarning()
    return 0
  } else {
    return value - 1
  }
}

export default decreaseByOne
