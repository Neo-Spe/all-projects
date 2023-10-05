const menuBtn = document.querySelector(".menu");
const topWrapper = document.querySelector(".top .wrapper");
menuBtn.addEventListener("click", () => {
  topWrapper.classList.toggle("show");
  const isActive = topWrapper.classList.contains("show");
  if (isActive) {
    menuBtn.firstElementChild.src = "./images/icon-close.svg";
  } else {
    menuBtn.firstElementChild.src = "./images/icon-hamburger.svg";
  }
});
