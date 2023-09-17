const path = require("path");
const fs = require("fs");
const os = require("os");
const http = require("http");

console.log(path.join(__dirname, "testing", "home", "app.js"));

// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.end("Thank you!", {status:200});
// });

// server.listen(8000, () => {
//   console.log("SErver started on port: 8000");
// });
