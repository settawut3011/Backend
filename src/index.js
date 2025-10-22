const express = require("express");
const app = express();
const port = 3000;

const x = 2;
console.log(x);

app.get("/", (req, res) => {
  res.send("Hello N'Nut");
});

app.listen(port, () => {
  console.log("sever is running on port", port);
});
