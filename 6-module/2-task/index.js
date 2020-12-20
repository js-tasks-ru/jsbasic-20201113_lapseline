import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.generateCard();
    this.price = product.price;
  }
  generateCard() {
    let wrapper = document.createElement("div");
    wrapper.classList.add("card");
    wrapper.insertAdjacentHTML(
      "afterbegin",
      `<div class="card__top">
      <img src="/assets/images/products/${
        this.product.image
      }" class="card__image" alt="product">
      <span class="card__price">€${this.product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
      <div class="card__title">${this.product.name}</div>
      <button type="button" class="card__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>`
    );
    const eventButton = wrapper.querySelector(".card__button");
    eventButton.addEventListener("click", () => {
      let event = new CustomEvent("product-add", {
        detail: this.product.id,
        bubbles: true,
      });
      wrapper.dispatchEvent(event);
    });
    return wrapper;
  }
}
