import { sum, sumMultiple, substract, multiply, divide } from './typescript'

const testSum = sum(2, null)
const testMulti = sumMultiple([1, 2, 3, 4, 5, 6])
const sub = substract(5, 3)
const multi = multiply(5, -150)
const div = divide(333, 3)

console.log(testSum, testMulti, sub, multi, div)
