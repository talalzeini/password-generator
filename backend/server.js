// TO RUN: node server.js
// TO RUN: nodemon server.js

var express = require("express");
var app = express();

app.use("/data", require("./routes/dataRoute"));

app.listen(3001, () => {
  console.log("Server currently running on port 3001.");
});

// Example: Displaying an arraying
// app.get("/", (req, res, next) => {
//   res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
// });
