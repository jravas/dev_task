import { SafeFuncitons } from './safeFunctions'
/**
 * Check if param is valid number and log suitable emoji
 * @param param Parameter to check if is it valid number
 */
const paramCheck = param => `${param} => ${isNaN(param) ? '❌  ' : '✔️  '}`

/**
 * Dirty hack to convert values to numbers
 * @param a Parameter that is converted to number
 */
const toNum = a => a * 1

/**
 * Displays console.error if paremeter are invalid
 * @param method Name of method for which this validation message is
 * @param params Parameters that are passed to method that are we validationg
 */
const validationMessage = (method, params, additonal = '') => {
  console.error(`
    Wrong parameter provided:
    ${method}(${params})
    Passed parameters should be ${additonal}: boolean, number or string numbers`)
}

/**
 * Check if passed values are valid
 */
const twoValuesValid = (functionName, a, b) => {
  if (isNaN(a) || isNaN(b)) {
    const params = `${paramCheck(a)}, ${paramCheck(b)}`
    validationMessage(functionName, params)
    return false
  }
  if (functionName === SafeFuncitons.Divide && !toNum(b)) {
    console.error('Division by zero is not possible !')
    return false
  }
  return true
}

/**
 * Check if values passed to sumMulti are valid
 */
const sumMultiValid = params => {
  if (!Array.isArray(params)) {
    validationMessage(SafeFuncitons.SumMulti, params, 'array of')
    return false
  }

  const isArrayInvalid = params.some(i => isNaN(i))
  if (isArrayInvalid) {
    const arrayOfInvalid = params.map(i => paramCheck(i))
    validationMessage(SafeFuncitons.SumMulti, arrayOfInvalid, 'array of')
    return false
  }

  return true
}

export { twoValuesValid, sumMultiValid, toNum }
