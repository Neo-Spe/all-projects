const hamburger = document.getElementById("hamburger");
const navWrapper = document.querySelector(".wrapper");
hamburger.addEventListener("click", () => {
  navWrapper.classList.toggle("show");
  if (navWrapper.classList.contains("show")) {
    hamburger.firstElementChild.src = "./images/icon-close.svg";
  } else {
    hamburger.firstElementChild.src = "./images/icon-hamburger.svg";
  }
});
