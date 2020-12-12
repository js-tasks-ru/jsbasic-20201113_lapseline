/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  let i = 0;
  for (let elems of table.rows) {
    elems.cells[i].style.backgroundColor = "red";
    i++;
  }
}
