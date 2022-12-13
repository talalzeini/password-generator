const express = require("express");
const app = express();
const path = require("path");

app.use("/data", require("./routes/dataRoute"));

const PORT = process.env.PORT || 8000;

app.use(express.static(path.join("./frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join("./frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log("Server currently running on port " + PORT);
});
