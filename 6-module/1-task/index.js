/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: '',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.data = rows;
    this.elem = this.createTable();
  }
  createTable() {
    this.row = document.createElement("table");
    this.row.insertAdjacentHTML(
      "afterbegin",
      `<thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
        </thead>`
    );
    this.row.insertAdjacentHTML("beforeend", "<tbody></tbody>");
    for (const person of this.data) {
      const body = this.row.tBodies[0];
      const template = `
        <tr>
          <th>${person.name}</th>
          <th>${person.age}</th>
          <th>${person.salary}</th>
          <th>${person.city}</th>
          <td><button class="deleteRow">X</button></td>
        </tr>`;
      body.insertAdjacentHTML("afterbegin", template);
      this.row.addEventListener("click", (evt) => {
        if (evt.target.closest(".deleteRow")) {
          evt.target.closest("tr").remove();
        }
      });
    }
    return this.row;
  }
}
