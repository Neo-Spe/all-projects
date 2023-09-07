const form = document.querySelector("form");
const resultHolder = document.querySelector("p.result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const phy = +e.target[0].value;
  const chm = +e.target[1].value;
  const bio = +e.target[2].value;
  const mat = +e.target[3].value;
  const ict = +e.target[4].value;

  if (!phy || !chm || !bio || !mat || !ict) {
    alert("Please fill all the values correctly");
  } else if (phy > 100 || chm > 100 || bio > 100 || mat > 100 || ict > 100) {
    alert("Sorry! you're a thief... try again with a score between 0 - 100");
  } else if (phy < 0 || chm < 0 || bio < 0 || mat < 0 || ict < 0) {
    alert(
      "Sorry! negative score detected... try again with a score between 0 - 100"
    );
  } else {
    const overall = 500;
    const total = phy + chm + bio + mat + ict;
    const percentage = ((total / 500) * 100).toFixed(2);

    resultHolder.classList.add("show");

    const pNum = +percentage;
    let grade;

    if (pNum >= 70) {
      grade = "A";
    } else if (pNum >= 60 && pNum < 70) {
      grade = "B";
    } else if (pNum >= 50 && pNum < 60) {
      grade = "C";
    } else if (pNum >= 45 && pNum < 50) {
      grade = "D";
    } else {
      grade = "F";
    }

    let phrase;
    if (grade !== "F") {
      phrase = "You Passed";
    } else {
      phrase = "You Failed";
    }

    resultHolder.children[0].innerText = total;
    resultHolder.children[1].innerText = percentage;
    resultHolder.children[2].innerText = grade;
    resultHolder.children[3].innerText = phrase;

    resultHolder.children[0].removeAttribute("class");
    resultHolder.children[1].removeAttribute("class");
    resultHolder.children[2].removeAttribute("class");
    resultHolder.children[3].removeAttribute("class");

    resultHolder.children[0].classList.add(grade);
    resultHolder.children[1].classList.add(grade);
    resultHolder.children[2].classList.add(grade);
    resultHolder.children[3].classList.add(grade);
  }
});
