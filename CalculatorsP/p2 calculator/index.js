const screenDisplay = document.querySelector(".screen h1");
const buttons = document.querySelectorAll(".buttons button");

console.log(".buttons");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.classList);
    console.log(e.target.innerText);
    console.log(e.target.dataset);
    if (btn.innerText === "=") {
      try {
        screenDisplay.innerHTML = Number(eval(screenDisplay.innerHTML)).toFixed(
          10
        );
      } catch (error) {
        console.log(error.message);
        alert("maths error");
      }
    } else if (btn.innerText === "C") {
      screenDisplay.innerHTML = "00";
    } else {
      const un = btn.dataset.value || btn.innerText;
      if (screenDisplay.innerHTML === "00") {
        screenDisplay.innerHTML = un;
      } else {
        screenDisplay.innerHTML += un;
      }
    }
  });
});
