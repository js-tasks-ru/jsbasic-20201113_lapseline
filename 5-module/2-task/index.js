function toggleText() {
  const button = document.querySelector(".toggle-text-button");
  const textToManipulate = document.querySelector("div#text");
  button.addEventListener("click", () => {
    if (textToManipulate.getAttribute("hidden") !== "true") {
      textToManipulate.setAttribute("hidden", "true");
    } else {
      textToManipulate.removeAttribute("hidden");
    }
  });
}
