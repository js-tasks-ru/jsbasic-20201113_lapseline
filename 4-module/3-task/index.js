/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    let currentPerson = table.rows[i];
    let currentPersonStatus = currentPerson.cells[3];
    let currentPersonAge = currentPerson.cells[1];
    let currentPersonGender = currentPerson.cells[2];
    if (currentPersonStatus.getAttribute("data-available") === "true") {
      currentPerson.classList.add("available");
    } else if (currentPersonStatus.getAttribute("data-available") === "false") {
      currentPerson.classList.add("unavailable");
    } else {
      currentPerson.setAttribute("hidden", true);
    }
    if (currentPersonAge.innerText < 18) {
      currentPerson.style.textDecoration = "line-through";
    }
    if (currentPersonGender.innerText === "m") {
      currentPerson.classList.add("male");
    } else {currentPerson.classList.add("female");}
  }
}
