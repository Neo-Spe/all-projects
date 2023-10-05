// const path = require("path");
// const fs = require("fs");
// const os = require("os");
// const http = require("http");

// console.log(path.join(__dirname, "testing", "home", "app.js"));

// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.end("Thank you!", {status:200});
// });

// server.listen(8000, () => {
//   console.log("SErver started on port: 8000");
// });

const userType = 11;
//import default
// import Named from file
// import x from "./mod1.js";
// console.log(x);

// //import named
// // import {name1,name2,name3} from file
// import { age, userType } from "./mod1.js";
// console.log(age, userType);

//both
// import default, {named1,named2} from file
import users, { userType as m } from "./mod1.js";
console.log(users, userType, m);
