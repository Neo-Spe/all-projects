// 1. select all the dropdown
const dropdown = document.querySelectorAll(".dropdown");
console.log(dropdown);
// 2. loop over all the dropdown and add event of the header
dropdown.forEach((dpd) => {
  dpd.firstElementChild.addEventListener("click", () => {
    // 3. any time a particular dropdown is clicked, loop through again and remove any open dropdown
    dropdown.forEach((dpd2) => {
      if (dpd2 !== dpd) {
        dpd2.lastElementChild.classList.remove("open");
        dpd2.firstElementChild.lastElementChild.style.transform =
          "rotate(0deg)";
      }
    });
    // 4. add the open class to the current one
    if (dpd.lastElementChild.classList.contains("open")) {
      dpd.firstElementChild.lastElementChild.style.transform = "rotate(0deg)";
    } else {
      dpd.firstElementChild.lastElementChild.style.transform = "rotate(180deg)";
    }
    dpd.lastElementChild.classList.toggle("open");
  });
});
