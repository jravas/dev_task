/**
 * Returns sum of value 'a' and 'b'
 * @param a number
 * @param b number
 */
const sum = (a: number, b: number): number => a + b

/**
 * Returns sum for passed array of numbers
 * @param array Array of number
 */
const sumMultiple = (array: number[]): number =>
  array.reduce((accumulator, currentValue) => accumulator + currentValue)
// const reducer = (accumulator, currentValue) => accumulator + currentValue

/**
 * Returns value 'b' subtracted from 'a'
 * @param a number
 * @param b number
 */
const substract = (a: number, b: number): number => a - b

/**
 * Returns product of value 'a' and 'b'
 * @param a number
 * @param b number
 */
const multiply = (a: number, b: number) => a * b

/**
 * Returns value 'a' divided by 'b'
 * @param a number
 * @param b number
 */
const divide = (a: number, b: number): number | void =>
  b ? a / b : console.error('Division by zero is not possible !')

export { sum, sumMultiple, substract, multiply, divide }
