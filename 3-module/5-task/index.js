/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let result = str
    .split(" ")
    .join()
    .split(",")
    .map((number) => parseFloat(number))
    .filter((number) => !isNaN(number))
    .sort((a, b) => a - b);
  let min = result[0];
  let max = result[result.length - 1];
  return { min, max };
}
