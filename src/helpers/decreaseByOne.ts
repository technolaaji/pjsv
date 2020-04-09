import checkIfZeroOrBelow from './checkIfZeroOrBelow'
import { zeroOrBelowWarning } from '../util/constants'

export default (value: number): number => {
  if (checkIfZeroOrBelow(value)) {
    zeroOrBelowWarning()
    return 0
  } else {
    return value - 1
  }
}
