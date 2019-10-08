import { sum, sumMulti, substract, multiply, divide } from './looselyTyped'
import { twoValuesValid, sumMultiValid, toNum } from './typeCheck'
import { SafeFuncitons } from './safeFunctions'

/**
 * Returns sum of value 'a' and 'b' or 'undefined' and log invalid type message
 * @param a number
 * @param b number
 */
const safeSum = (a, b) => {
  if (!twoValuesValid(SafeFuncitons.Sum, a, b)) {
    return
  }
  return sum(toNum(a), toNum(b))
}

/**
 * Returns sum for passed array of numbers/string numbers or 'undefined' and log invalid type message
 * @param array Array of number
 */
const safeSumMulti = array => {
  if (!sumMultiValid(array)) {
    return
  }
  return sumMulti(array.map(i => toNum(i)))
}
/**
 * Returns value 'b' subtracted from 'a' or 'undefined' and log invalid type message
 * @param a number
 * @param b number
 */
const safeSubstract = (a, b) => {
  if (!twoValuesValid(SafeFuncitons.Substract, a, b)) {
    return
  }
  return substract(toNum(a), toNum(b))
}

/**
 * Returns product of value 'a' and 'b' or 'undefined' and log invalid type message
 * @param a number
 * @param b number
 */
const safeMultiply = (a, b) => {
  if (!twoValuesValid(SafeFuncitons.Multiply, a, b)) {
    return
  }
  return multiply(toNum(a), toNum(b))
}

const safeDivide = (a, b) => {
  if (!twoValuesValid(SafeFuncitons.Divide, a, b)) {
    return
  }
  return divide(toNum(a), toNum(b))
}

export { safeSum, safeSumMulti, safeSubstract, safeMultiply, safeDivide }
