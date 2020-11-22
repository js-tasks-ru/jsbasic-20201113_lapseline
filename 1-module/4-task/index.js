/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  const preparedString = str.toLowerCase();
  const subString1 = "1xbet";
  const subString2 = "xxx";
  let result =
    preparedString.includes(subString1) || preparedString.includes(subString2)
      ? true
      : false;
  return result;
}
