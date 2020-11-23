/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str.length === 0) {
    return str;
  }
  let capitalizeFirst = str[0].toUpperCase();
  return `${capitalizeFirst}${str.slice(1)}`;
}
