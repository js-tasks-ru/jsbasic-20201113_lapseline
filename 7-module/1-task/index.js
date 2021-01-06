import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.generateRibbon();
  }

  generateRibbon() {
    const rootElem = document.createElement("div");
    rootElem.classList.add("ribbon");
    const buttonLeft = document.createElement("button");
    buttonLeft.classList.add("ribbon__arrow", "ribbon__arrow_left");
    buttonLeft.insertAdjacentHTML(
      "afterbegin",
      `<img src="/assets/images/icons/angle-icon.svg" alt="icon">`
    );
    rootElem.append(buttonLeft);
    const nav = document.createElement("nav");
    nav.classList.add("ribbon__inner");

    for (let item of this.categories) {
      let linkInNav = document.createElement("a");
      linkInNav.setAttribute("href", "#");
      linkInNav.classList.add("ribbon__item");
      linkInNav.dataset.id = `${item.id}`;
      linkInNav.insertAdjacentText("beforeend", `${item.name}`);
      nav.append(linkInNav);
    }

    nav.querySelector("a").classList.add("ribbon__item_active");
    rootElem.append(nav);
    const buttonRight = document.createElement("button");
    buttonRight.classList.add(
      "ribbon__arrow",
      "ribbon__arrow_right",
      "ribbon__arrow_visible"
    );
    buttonRight.insertAdjacentHTML(
      "beforeend",
      '<img src="/assets/images/icons/angle-icon.svg" alt="icon">'
    );
    rootElem.append(buttonRight);

    rootElem.addEventListener("click", (evt) => {
      if (evt.target.closest(".ribbon__arrow_left")) {
        nav.scrollBy(-350, 0);
      }
      if (evt.target.closest(".ribbon__arrow_right")) {
        nav.scrollBy(350, 0);
      }
      if (evt.target.closest("a.ribbon__item")) {
        evt.preventDefault();
        let eventProduct = new CustomEvent("ribbon-select", {
          bubbles: true,
          detail: evt.target.closest("a").dataset.id,
        });
        rootElem.dispatchEvent(eventProduct);

        for (let navElems of nav.children) {
          navElems.classList.remove("ribbon__item_active");
          evt.target.closest("a").classList.add("ribbon__item_active");
        }
      }
    });
    nav.addEventListener("scroll", (evt) => {
      let scrollWidth = nav.scrollWidth;
      let scrollLeft = nav.scrollLeft;
      let clientWidth = nav.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft === 0) {
        buttonLeft.classList.remove("ribbon__arrow_visible");
      } else {
        buttonLeft.classList.add("ribbon__arrow_visible");
      }

      if (scrollRight === 0) {
        buttonRight.classList.remove("ribbon__arrow_visible");
      } else {
        buttonRight.classList.add("ribbon__arrow_visible");
      }
    });
    return rootElem;
  }
}
