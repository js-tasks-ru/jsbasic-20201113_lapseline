/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1;
  for (let index = n; index > 0; index--) {
    result = result * index;
  }
  return result;
}
