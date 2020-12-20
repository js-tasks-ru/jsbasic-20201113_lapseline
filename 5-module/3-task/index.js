function initCarousel() {
  function mover() {
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
    if (Math.abs(move) < step * 3) {
      rightArrow.style.display = "";
    } else {
      rightArrow.style.display = "none";
    }
  }
  const leftArrow = document.querySelector(".carousel__arrow_left");
  const rightArrow = document.querySelector(".carousel__arrow_right");
  let carouselMove = document.querySelector(".carousel__inner");
  const step = document.querySelector(".carousel__slide").offsetWidth;
  leftArrow.addEventListener("click", mover);
  rightArrow.addEventListener("click", mover);
  leftArrow.style.display = "none";
  let move = 0;
}
