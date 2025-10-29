// ** งานหลังบ้าน Backend **

// คำสั่งขั้นตอนในการติดตั้ง
// 1. npm init -y
// 2. npm install express
// 3. npm install nodemon
// 4. npm run start  เพิ่ม script ใน package.json โดยใส่ Key:value  "start": "node ./src/index.js",
// 5. npm run dev    เพิ่ม script ใน package.json โดยใส่ Key:value  "dev": "npx nodemon ./src/index.js"

// คำสั่งเรียกเครื่องมือ express
const express = require("express");
// คำสั่งใช้เครื่องมือ express
const app = express();
// กำหนด port ที่จะใช้แสดงผลหน้าเว็ป
const port = 3000;
// คำสั่งนำเข้าข้อมูลทั้งหมดจากไฟล์ inventory.js
const inventory = require("./inventory.js");
// คำสั่งนำเข้าข้อมูลทั้งหมดจากไฟล์ ???
const nodemon = require("nodemon");

//  ชุดคำสั่งแปลงข้อมูลที่ถูกส่งมาจากฟอร์ม (HTML form) ผ่าน HTTP POST กับ PUT ให้อยู่ในรูปแบบที่สามารถเข้าถึงได้จาก req.body
app.use(express.urlencoded());

// ชุดคำสั่งด้วย 4 Methods (API CRUD) ต่างๆ ได้แก่ เพิ่ม อ่าน แก้ไข ลบ (Post,Get,Update,Delete)
// v
// v
// v

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

// ชุดคำสั่ง อ่านข้อมูล (Get)
// แสดงผลข้อมูล "Hello N'Nut" ผ่านหน้าเว็ป
app.get("/", (req, res) => {
  res.send("Hello N'Nut");
});

// แสดงผลข้อมูลใน listProduct ทั้งหมดผ่านหน้าเว็ปช่องทาง /listProduct
app.get("/listProduct", (req, res) => {
  res.send(inventory.listProduct);
});

// ชุดคำสั่ง อ่านข้อมูล (Get) โดยค้นหาค่าเฉพาะ parameter id ที่ user ร้องขอ
app.get("/listProduct/:id", (req, res) => {
  const userReqid = req.params.id;
  console.log(userReqid);
  const y = inventory.listProduct.find(({ id }) => {
    return id == userReqid;
  });
  res.send(y);
});

// คำสั่งให้แสดงผลลงบน server ผ่าน port ที่กำหนด
app.listen(port, () => {
  console.log("sever is running on port", port);
});
