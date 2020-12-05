/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  const result = [];
  arr.forEach((val) => {
    if (val >= a && val <= b) {
      result.push(val);
    }
  });
  return result;
}
