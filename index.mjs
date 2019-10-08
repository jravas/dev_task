import {
  safeSum,
  safeSumMulti,
  safeSubstract,
  safeMultiply,
  safeDivide
} from './vanilla'

const testSum = safeSum('5', null)
const testMulti = safeSumMulti([1, 2, 3, 4, 5, 6])
const sub = safeSubstract('5', 't')
const multi = safeMultiply(5, -150)
const divide = safeDivide(333, 0)
console.log(testSum, testMulti, sub, multi, divide)
