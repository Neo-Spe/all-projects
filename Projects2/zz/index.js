const mobileMenu = document.getElementById("mobile-menu-button");
const navWrapper = document.querySelector(".wrapper");

const cardsWrapper = document.querySelector(".cards_wrapper");

mobileMenu.addEventListener("click", () => {
  navWrapper.classList.toggle("show");
  if (navWrapper.classList.contains("show")) {
    mobileMenu.firstElementChild.src = "./images/icon-close.svg";
  } else {
    mobileMenu.firstElementChild.src = "./images/icon-hamburger.svg";
  }
});