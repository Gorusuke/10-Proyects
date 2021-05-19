const btn = document.getElementById("btn");
const modalContainer = document.querySelector(".modal-container");
const close = document.querySelector(".close");

btn.addEventListener("click", () => {
  modalContainer.style.display = "flex";
  btn.style.display = "none";
});

close.addEventListener("click", () => {
  modalContainer.style.display = "none";
  btn.style.display = "block";
});
