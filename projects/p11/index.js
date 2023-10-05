const menuBtn = document.querySelector(".menu");
const navLinkWrapper = document.querySelector("nav ul");
menuBtn.addEventListener("click", () => {
  navLinkWrapper.classList.toggle("show");
  const isActive = navLinkWrapper.classList.contains("show");
  if (isActive) {
    menuBtn.firstElementChild.src = "./images/icon-close.svg";
  } else {
    menuBtn.firstElementChild.src = "./images/icon-hamburger.svg";
  }
});
