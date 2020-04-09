/**
 * Zero or Below Checker - checks if the value provided is zero or below so that it does not decrement the package.json below zero
 * @param value
 * @returns boolean
 */
const checkIfZeroOrBelow = (value: number): boolean => {
  if (value <= 0) {
    return true
  } else {
    return false
  }
}

export default checkIfZeroOrBelow
