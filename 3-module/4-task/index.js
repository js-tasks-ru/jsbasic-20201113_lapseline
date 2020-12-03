/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let result = "";
  users.forEach((obj, idx, usersArray) => {
    if (obj.age <= age) {
      result = result + `${obj.name}, ${obj.balance}` + "\n";
    }
  });
  return result.slice(0, result.length - 1);
}
