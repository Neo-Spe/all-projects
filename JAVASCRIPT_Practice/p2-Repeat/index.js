const form = document.querySelector("form");
const resultBox = document.querySelector(".result Div");
form.addEventListener("submit/check", (e) => {
  e.preventDefault();
  const Physics = +e.target[0].value;
  const Chemistry = +e.target[1].value;
  const Biology = +e.target[2].value;
  const maths = +e.target[3].value;
  const Ict = +e.target[4].value;
  const English = +e.target[5].value;
  const Civic = +e.target[6].value;
  const Literature = +e.target[7].value;
if (!Physics || !Chemistry || !Biology || !maths || !Ict || !English || !Civic || !Literature){
  alert("please fill the data's correctly")
}else if (Physics > 100 || Chemistry  > 100 || Biology > 100 || maths > 100 || Ict > 100 || English > 100 || Civic > 100 || Literature > 100 ){
  alert("sorry!try again with a score 0-100");
}else if(Physics < 0 || Chemistry < 0 || Biology < 0 || maths < 0 || Ict < 0 || English < 0 || Civic < 0 || Literature < 0 ); {
  alert("negative scores detected...Try again with a score 0-100");
}

else
{
  const overall = 800;
  const total = Physics + Chemistry + Biology + maths + Ict + English + Civic + Literature;
  const percentage = ((total/800) * 100).toFixed(2);
}
}
);
  
