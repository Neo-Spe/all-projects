const displayBox = document.querySelector(".display h1");
const btns = document.querySelectorAll(".btns button");

console.log(btns);

// for(let i=0; i < btns.length; i++){
//     btns[i]
// }
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.classList);
    console.log(e.target.innerText);
    console.log(e.target.dataset.op);
    if (btn.innerText === "=") {
      try {
        displayBox.innerHTML = eval(displayBox.innerHTML).toFixed(10);
      } catch (error) {
        console.log(error.message);
        alert("Maths Error");
      }
    } else if (btn.innerText === "C") {
      displayBox.innerHTML = "00.00";
    } else {
      const v = btn.dataset.op || btn.innerText;
      if (displayBox.innerHTML === "00.00") {
        displayBox.innerHTML = v;
      } else {
        displayBox.innerHTML += v;
      }
      //   displayBox.innerHTML` = displayBox.innerHTML + btn.innerText
    }
  });
});
