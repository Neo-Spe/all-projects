// console.log("Welcome to JS");

//a single line comment
/* multi-line comments
thess dsedse
*/

// console.log(error);
// console.log("no error");

//basic constructs in Js
// ---> DATA TYPES
//BASIC TYPES
// --> number
// int/integer  1 7 25 -10
// float/double 0.5 25.7 -20.0
// console.log(25 + 0.5);
//
// --> string
// ---> single quote
// ---> double quote
// ---> backtick
// console.log("double ${2+2} quote type 2+2");
// console.log("single quote type" + (2 + 2));
// console.log("she's is eating");
// console.log(' "yes, come inside" ');
// console.log(`object ${2 + 2}`);

// --> boolean
// true / false
// console.log(2 < 3);

// --> null, undefined

// console.log(age);

// ----> VARIABLES
//variable that can change
//let

//declaration
// let age;
// console.log(age);
// age = 25; //assignment

// console.log(age);

// let age = 25; //initialization
// console.log(age);
// age = 30;
// console.log(age);

//variable that cannot change
//const
// console.log(age);
// let age = 25;

// age = 35;

// let age = 25;

// age = "id ontsd"

//** ARRAY */
// const scores = [25, "age", "testing", false, undefined, [78, 20]];
// console.log(scores);
// console.log(scores[5]);

// // var = value;
// scores[2] = "My name";
// console.log(scores);

//operators
//arithmetic  + - * / %
//relational >     <     >=     a<=b     a==b    a===b  a!=b   a!==b
//logic    ||(or)    &&(and)     !(not)

// console.log("5" == 5);
// console.log("5" === 5);

// console.log("my name" || 20);
// console.log("" || 2540);
// console.log(0 && 5);

// const _age = 21;
// console.log(!(_age > 25 && _age < 50));
// 1    1   -> 1
//1     0   -> 1
//0     1   -. 1
// 0     0  -> 0

// AND
//1    1    -> 1
//1    0    0
//0     1   0
//0     0   0

// falsy -> "" 0 false undefined null

//conditional  condition ? Yes : No;
// const age = 17;
// let msg = age >= 18 ? "YOu can vote" : "Sorry, try again when you're 18yrs old";
// console.log(msg);

//control structure
//conditional
// if

// const age = 12;
// if (age >= 18) {
//   console.log("Yes, you're eligible to vote");
// } else {
//   console.log("Sorry, try again later");
// }

// if(c1){
//   statement1
// }else if(c2){a2}
// else if(c3){a3}
// else{
//   action_else
// }

//loop
//while for
// let i = 20;
// while (i <= 40) {
//   console.log(i);
//   i += 1; // i = i+5;
// }

//COMPLEX TYPES
// --> array
// --> Objects

// var age2 = 10;
// var age2 = "someithing else";

// studentName
// studentCourse

// const s2 = Object({})
// const student = {
//   key: value,
//   key2: v2,
//   k3: v3,
// }

// const $sch_2$ = {};

// const student = {
//   name: "Rasta",
//   courses: ["CODING", "COPYWRITE"],
//   address: "22 I don't know like this",
//   age: 17,
//   school: {
//     name: "My_school",
//     address: "we nosdas",
//   },
//   key: "value",
//   "name 1": "Name one value",
// };

// console.log(student);

// console.log(student.school.address.charAt()); //dot notation
// console.log(student.courses);

// console.log(student["name 1"]);
// console.log(student["courses"]); //array notation

// const k = "courses";

// console.log(student[k]);

//**FUNCTIONS */
//1. create a function
// function function_name() {
//   console.log("function_name called");
// }
// const function_name3 = function () {};
// const arrow_func = () => {};

// //With parameters
// function function_name2(age, st = 34) {
//   console.log(`First Param: ${age}\nSecond Param: ${st}`);
// }
// const function_name32 = function (parameter1, parameter2) {};
// const arrow_func2 = (parameter1, parameter2) => {};

// //2. call
// function_name();
// function_name3();
// arrow_func();

// function_name2("two", 250);
// function_name2(false, true);
// function_name2("third", 0);

//a function inside object is known as method

// const st1 = {
//   name: "Rasta",
//   talk: () => {
//     console.log("Rasta is talking...");
//   },
//   walk() {
//     console.log("Rasta is walking");
//   },
// };

// st1.walk();
// st1.talk();

//OOP -> CLASS

//DOM -> DOCUMENT OBJECT MODEL
// console.log(window);
// console.log(document);

// const inputs = document.querySelectorAll("input");
// const span = document.querySelector("span");
// span.onclick = (e) => {
//   console.log(e);
//   span.style.backgroundColor = `rgb(${Math.random() * 256} ${
//     Math.random() * 256
//   } ${Math.random() * 256})`;
// };
// console.log((inputs[0].value = "Testing from js"));

// //dom -> document object model

// //css model

// document.forms[0].onsubmit = (e) => {
//   console.log(e);
//   e.preventDefault();
// };
// //
// let a = 30;

// const byId = document.getElementById("register");
// console.log(byId);

// const byClass = document.getElementsByClassName("btn");
// console.log(byClass);

// const byTagName = document.getElementsByTagName("p");
// console.log(byTagName);

// const byName = document.getElementsByName("text");
// console.log(byName);

// console.log([]);

// const cssWay = document.querySelector(".btn");
// console.log(cssWay);

// const cssWay2 = document.querySelectorAll(".btn");
// console.log(cssWay2);

// const firstH1 = document.querySelector("h1");
// firstH1.innerHTML = "welcome to JS Class <i>testing</i>";
// firstH1.innerText = "welcome to JS Class 2 <i>testing</i>";
// firstH1.textContent = "Welcome to Js Class 3 <i>testing</i>";

// const f1 = document.querySelector("form#register");
// f1.innerHTML = "<p>testing</p>";

// f1.style.fontSize = "30px";

// const h1 = document.querySelector("#heading");
// console.log(h1);

// h1.style.backgroundColor = h1.getAttribute("data-color");
// h1.style.padding = "1rem";

// h1.setAttribute("class", "testing");

// h1.removeAttribute("name");
// console.log(h1.hasAttribute("data-color"));

// console.log(h1.getAttribute("data-color"));

// h1.classList.remove("c");
// h1.classList.add("john");
// h1.classList.toggle("c");
// console.log(h1.classList.contains("dasd"));

// console.log(h1.previousSibling);
// console.log(h1.previousElementSibling);
// console.log(h1.nextSibling);
// console.log(h1.nextElementSibling.nextElementSibling.previousElementSibling);
// console.log(h1.nextElementSibling.lastElementChild);
// console.log(h1.nextElementSibling.children);

// const p = h1.nextElementSibling;
// const sp = document.querySelector("p span");
// console.log(p, sp);

// const sp2 = document.createElement("span");
// console.log(sp2);

// sp2.innerHTML = "Dynamic text from javascript createElement";
// p.removeChild(p.firstElementChild);

// p.appendChild(sp2);

// p.insertBefore(sp2, sp);
// p.insertAdjacentElement("afterend", sp2);

// EVENT

// document.body.onclick = (e) => {
//   console.log(e);
//   console.log("Body Clicked");
// };
// const table = document.querySelector("table");
// function MyFunc(e) {
//   console.log(e);
//   console.log("click1");
// }
// const MyFunc2 = () => {
//   console.log("click");
// };
// table.onclick = () => {};
// table.onclick = function () {};
// table.onclick = function Alert() {};
// table.onclick = MyFunc2;
// table.onclick = MyFunc;

// table.firstElementChild.onclick = MyFunc2;

// table.addEventListener("click", MyFunc, {
//   once: true,
//   capture: true,
// });

// const a = document.querySelector(".a");

// // console.log(a);
// a.onclick = (e) => {
//   e.preventDefault();
// };

// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(e);
// });

// form.addEventListener("mouseenter", (e) => {
//   e.target.classList.add("jug");
// });
// form.addEventListener("mouseleave", (e) => {
//   e.target.classList.remove("jug");
// });

// document.querySelector("form input").addEventListener("blur", (e) => {
//   console.log(e);
// });
