import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.generateCarousel();
  }
  generateCarousel() {
    const wrapper = document.createElement("div");
    const inner = document.createElement("div");
    inner.classList.add("carousel__inner");
    wrapper.classList.add("carousel");
    wrapper.append(inner);
    wrapper.insertAdjacentHTML(
      "afterbegin",
      `<div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>`
    );
    for (let product of this.slides) {
      inner.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="carousel__slide" data-id="${product.id}">
          <img src="/assets/images/carousel/${
            product.image
          }" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${product.price.toFixed(2)}</span>
            <div class="carousel__title">${product.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `
      );
    }
    let eventButtons = inner.querySelectorAll(".carousel__button");
    for (let button of eventButtons) {
      button.addEventListener("click", (evt) => {
        let productAdd = new CustomEvent("product-add", {
          detail: "chicken-cashew",
          bubbles: true,
        });
        wrapper.dispatchEvent(productAdd);
      });
    }
    function mover() {
      let step = inner.offsetWidth;
      let end = inner.childElementCount - 1;
      if (event.currentTarget === leftArrow) {
        move = move + step;
      } else if (event.currentTarget === rightArrow) {
        move = move + -step;
      }
      carouselMove.style.transform = `translateX(${move}px)`;
      if (Math.abs(move) > 0) {
        leftArrow.style.display = "";
      } else {
        leftArrow.style.display = "none";
      }
      if (Math.abs(move) < step * end) {
        rightArrow.style.display = "";
      } else {
        rightArrow.style.display = "none";
      }
    }
    const leftArrow = wrapper.querySelector(
      ".carousel__arrow.carousel__arrow_left"
    );
    const rightArrow = wrapper.querySelector(
      ".carousel__arrow.carousel__arrow_right"
    );
    leftArrow.style.display = "none";
    let move = 0;
    let carouselMove = wrapper.querySelector(".carousel__inner");
    leftArrow.addEventListener("click", mover);
    rightArrow.addEventListener("click", mover);
    return wrapper;
  }
}
