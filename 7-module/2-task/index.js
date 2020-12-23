import createElement from "../../assets/lib/create-element.js";

export default class Modal {
  constructor(data) {
    this.modalData = data;
    this.title = "";
    this.bodyElement = "";
    this.modal = "";
  }

  open() {
    const modal = document.createElement("div");
    this.modal = modal;
    modal.classList.add("modal");
    document.body.classList.add("is-modal-open");
    modal.insertAdjacentHTML(
      "beforeend",
      `<div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>
        <h3 class="modal__title">
        </h3>
      </div>
      <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
      </div>
    </div>`
    );
    document.body.append(modal);
    const title = document.createTextNode(this.title);
    const modalTitle = document.querySelector(".modal__title");
    modalTitle.append(title);

    const modalBody = document.querySelector(".modal__body");
    modalBody.innerHTML = "";
    modalBody.append(this.bodyElement);

    modal.addEventListener("click", (evt) => {
      if (evt.target.closest("button.modal__close")) {
        this.close();
      }
    });
    document.addEventListener("keydown", (evt) => {
      if (evt.code === "Escape") {
        this.close();
      }
    });
  }

  setTitle(title) {
    this.title = title;
  }

  setBody(element) {
    this.bodyElement = element;
  }

  close() {
    document.body.classList.remove("is-modal-open");

    this.modal.remove();
  }
}
