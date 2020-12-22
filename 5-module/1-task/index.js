function hideSelf() {
  let elem = document.body.querySelector(".hide-self-button");
  elem.addEventListener("click", function () {
    this.setAttribute("hidden", "true");
  });
}
