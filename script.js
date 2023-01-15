const container = document.querySelector(".container");
const greenButton = document.querySelector(".green-bg button");

greenButton.addEventListener("click", () => {
   container.classList.toggle("change");
});
