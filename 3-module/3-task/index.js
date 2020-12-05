/**
 * @param {string} str
 * @returns {string}
 */
function camelize(string) {
  let result = string.split("").map((val, idx, arr) => {
    if (arr[idx - 1] === "-") {
      return val.toUpperCase();
    } else {
      return val;
    }
  });
  return result.filter((val) => val !== "-").join("");
}
