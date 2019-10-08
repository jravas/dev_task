/**
 * Returns sum of value 'a' and 'b'
 * @param a number
 * @param b number
 */
const sum = (a, b) => a + b

/**
 * Returns sum for passed array of numbers
 * @param array Array of number
 */
const sumMulti = array =>
  array.reduce((accumulator, currentValue) => accumulator + currentValue)

/**
 * Returns value 'b' subtracted from 'a'
 * @param a number
 * @param b number
 */
const substract = (a, b) => a - b

/**
 * Returns product of value 'a' and 'b'
 * @param a number
 * @param b number
 */
const multiply = (a, b) => a * b

/**
 * Returns value 'a' divided by 'b'
 * @param a number
 * @param b number
 */
const divide = (a, b) => a / b

export { sum, sumMulti, substract, multiply, divide }
