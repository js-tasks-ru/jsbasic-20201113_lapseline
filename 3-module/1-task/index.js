/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let result = [];
  users.forEach((obj) => result.push(obj.name));
  return result;
}
