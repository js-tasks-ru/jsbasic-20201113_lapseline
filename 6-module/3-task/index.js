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
    wrapper.querySelector(".carousel__arrow_left").style.display = "none";
    for (let product of this.slides) {
      inner.insertAdjacentHTML(
        "beforeend",
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
    const carouselLength = this.slides.length - 1;
    console.log(carouselLength);
    let slideCurrentPosition = 0;
    wrapper.addEventListener("click", (evt) => {
      let step = inner.offsetWidth;
      if (evt.target.closest(".carousel__arrow_right")) {
        slideCurrentPosition += -step;
      }
      if (evt.target.closest(".carousel__arrow_left")) {
        slideCurrentPosition += step;
      }
      if (slideCurrentPosition === 0) {
        wrapper.querySelector(".carousel__arrow_left").style.display = "none";
      } else {
        wrapper.querySelector(".carousel__arrow_left").style.display = "";
      }
      if (Math.abs(slideCurrentPosition) === step * carouselLength) {
        wrapper.querySelector(".carousel__arrow_right").style.display = "none";
      } else {
        wrapper.querySelector(".carousel__arrow_right").style.display = "";
      }
      inner.style.transform = `translateX(${slideCurrentPosition}px)`;
    });
    wrapper.addEventListener("click", function (event) {
      if (event.target.closest("button.carousel__button")) {
        let productEvent = new CustomEvent("product-add", {
          detail: event.target.closest("button.carousel__button").parentNode
            .parentNode.dataset.id,
          bubbles: true,
        });
        wrapper.dispatchEvent(productEvent);
      }
    });
    return wrapper;
  }
}
