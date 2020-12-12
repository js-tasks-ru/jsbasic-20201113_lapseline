/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let friendList = document.createElement("UL");
  for (let people of friends) {
    friendList.insertAdjacentHTML(
      "afterbegin",
      `<li>${people.lastName} ${people.firstName}</li>`
    );
  }
  return friendList;
}
