export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.initialValues = { steps, value };
    this.elem = this.generateSlider();
  }

  generateSlider() {
    const rootElem = document.createElement("div");
    rootElem.classList.add("slider");
    rootElem.insertAdjacentHTML(
      "beforeend",
      `
    <div class="slider__thumb" style="left: 50%;">
      <span class="slider__value">2</span>
    </div>
    <div class="slider__progress" style="width: 50%;"></div>
    `
    );
    const sliderStep = document.createElement("div");
    sliderStep.classList.add("slider__steps");

    for (let index = 0; index < this.initialValues.steps; index++) {
      const stepSpan = document.createElement("span");
      sliderStep.insertAdjacentElement("beforeend", stepSpan);
      stepSpan.dataset.number = `${index}`;
      if (index === 0) {
        stepSpan.classList.add("slider__step-active");
      }
    }
    rootElem.append(sliderStep);

    rootElem.addEventListener("click", (evt) => {
      const x = evt.clientX;
      const sliderSpan = document.querySelectorAll(".slider__steps span");
      let diff = x;
      let targetSpan = sliderSpan[0];
      for (let span of sliderSpan) {
        span.classList.remove("slider__step-active");
        let xSpan = span.getBoundingClientRect().x;
        let diffSpan = Math.abs(x - xSpan);
        if (diffSpan < diff) {
          diff = diffSpan;
          targetSpan = span;
        }
      }
      targetSpan.classList.add("slider__step-active");
      document.querySelector(
        ".slider__value"
      ).innerHTML = `${targetSpan.dataset.number}`;
      let thumb = rootElem.querySelector(".slider__thumb");
      let progress = rootElem.querySelector(".slider__progress");
      const leftPercents =
        (100 / (this.initialValues.steps - 1)) *
        Number(targetSpan.dataset.number);
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;

      let eventSlider = new CustomEvent("slider-change", {
        detail: Number(targetSpan.dataset.number),
        bubbles: true,
      });
      rootElem.dispatchEvent(eventSlider);
    });

    return rootElem;
  }
}
