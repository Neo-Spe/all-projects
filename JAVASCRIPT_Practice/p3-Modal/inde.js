const opendeModal = document.querySelector("main button");
const deModal = document.querySelector(".deModal");
const closeModal = document.querySelector(".close");
const form = document.querySelector("form");
const fullNameInput = document.querySelector(".fn");
opendeModal.addEventListener("click", () => {
  deModal.classList.add("show");
});
const MyFunc = () => {
  deModal.classList.remove("show");
};
closeModal.addEventListener("click", MyFunc);
MyFunc();
