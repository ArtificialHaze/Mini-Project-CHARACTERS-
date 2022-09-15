// VARIABLES

const countElement = document.querySelector(".count");
const inputElement = document.querySelector("input");

// EVENT LISTENERS

inputElement.addEventListener("keyup", () => {
  countElement.innerHTML = inputElement.value.length;
});
