const express = require("express");
const app = express();
const port = 3000;
const inventory = require("./inventory.js");
app.use(express.urlencoded());
app.post("/listProduct", (req, res) => {
  const newproduct = inventory.nameproduct(req.body.name);

  res.send(newproduct);

  console.log(req.body);
});

app.get("/", (req, res) => {
  res.send("Hello N'Nut");
});

app.get("/listProduct", (req, res) => {
  res.send(inventory.listProduct);
});

app.get("/listProduct/:id", (req, res) => {
  const x = req.params.id;
  console.log(x);
  const id = x;
  const y = inventory.listProduct.find(({ id }) => {
    return id == x;
  });
  res.send(y);
});

app.listen(port, () => {
  console.log("sever is running on port", port);
});
