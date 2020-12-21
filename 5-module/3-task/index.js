function initCarousel() {
  const container = document.querySelector(".container");
  const inner = document.querySelector(".carousel__inner");
  const carouselLength = inner.childElementCount - 1;
  let slideCurrentPosition = 0;
  document.querySelector(
    ".carousel__arrow.carousel__arrow_left"
  ).style.display = "none";
  container.addEventListener("click", (evt) => {
    let step = inner.offsetWidth;
    const rightArrow = document.querySelector(
      ".carousel__arrow.carousel__arrow_right"
    );
    const leftArrow = document.querySelector(
      ".carousel__arrow.carousel__arrow_left"
    );
    if (evt.target.closest(".carousel__arrow.carousel__arrow_right")) {
      slideCurrentPosition += -step;
    }
    if (evt.target.closest(".carousel__arrow.carousel__arrow_left")) {
      slideCurrentPosition += step;
    }
    if (slideCurrentPosition === 0) {
      leftArrow.style.display = "none";
    } else {
      leftArrow.style.display = "";
    }
    if (Math.abs(slideCurrentPosition) === step * carouselLength) {
      rightArrow.style.display = "none";
    } else {
      rightArrow.style.display = "";
    }
    inner.style.transform = `translateX(${slideCurrentPosition}px)`;
  });
}
