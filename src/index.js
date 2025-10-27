// ** งานหลังบ้าน Backend **
// ประกาศตัวแปลต่างๆ
const express = require("express");
const app = express();
const port = 3000;
const inventory = require("./inventory.js");

//  ชุดคำสั่งโค้ดต่างๆ

app.use(express.urlencoded());

// ชุดคำสั่ง ลบข้อมูล (delete)
app.delete("/listProduct/:id", (req, res) => {
  const deleteId = req.params.id;
  const deleteProduct = inventory.deleteProduct(deleteId);
  res.send(deleteProduct);
});

// ชุดคำสั่ง Update (Put)
app.put("/listProduct/:id", (req, res) => {
  const updateId = req.params.id;
  const updateName = req.body.name;
  const updatedProduct = inventory.updatedata(updateId, updateName);
  res.send(updatedProduct);
});

// ชุดคำสั่ง เพิ่มข้อมูล (Post)
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
