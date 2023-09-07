const openModal = document.querySelector("main button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const form = document.querySelector("form");
const fullNameInput = document.querySelector("#fn");
openModal.addEventListener("click", () => {
  modal.classList.add("show");
});

const MyF = () => {
  modal.classList.remove("show");
};
closeModal.addEventListener("click", MyF);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  console.log(fullNameInput.value);
  MyF();
});
