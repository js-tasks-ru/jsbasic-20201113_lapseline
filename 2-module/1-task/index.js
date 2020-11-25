/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  for (pay in salaries) {
    if (Number.isInteger(salaries[pay])) {
      sum += salaries[pay];
    }
  }
  return sum;
}
