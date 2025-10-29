const listProduct = [
  {
    id: 1,
    name: "Bottle",
  },

  {
    id: 2,
    name: "Shirt",
  },

  {
    id: 3,
    name: "Paper",
  },
];

// ฟังก์ชันการเพิ่มสินค้า กรณีนี้ จะเพิ่มจากชื่อสินค้า แต่จะให้แสดงผลทั้ง {id, name} วิธีนี้จะใช้คู่กับ Method => Post
// listProduct.length อ้างอิงถึงปริมาณในข้อมูลทั้งหมดใน listProduct
// listProduct.push เพิ่มข้อมูลใน listProduct
function addProduct(name) {
  const id = listProduct.length;
  listProduct.push({
    id: id,
    name: name,
  });

  return { id, name };
}

// ฟังก์ชัน แก้ไข(update)สินค้า วิธีนี้จะใช้คู่กับ Method => Put
// ในการกำหนดฟังก์ชันเราจะต้องรู้ก่อนว่าจะแก้ไข(update)สินค้าตัวไหน
// โดย user เป็นผู้ทำการกรอก id เพื่อร้องขอสินค้ามา และจะทำการแก้ไข(update) name ของสินค้านั้น

// ขั้นตอนเขียน code
// 1.ใส่ function updatedata(id, name) {}
// 2.findindex คือค้นหาลำดับที่เป็นชุดข้อมูล object{} ใน array[] ที่ชื่อว่า listProduct (จะเริ่มนับลำดับจาก 0 , 1 , 2 , 3... เป็นต้น) => ตัวแปล x = ค่าลำดับ
// แต่ถ้าไม่เจอลำดับที่ user ร้องขอมา ระบบจะแสดงผล -1 กลับไป (แปลว่าชุดข้อมูลใน array[] ไม่มีลำดับที่ user ร้องขอมา)
// 3.return Number(id) === product.id
// คือการแปลงค่าที่ user มักจะเป็น string เพื่อให้แสดงผลได้ถูกต้อง จึงแปลงค่าที่ใส่เข้ามาเป็นตัวเลข Number(id)

// ตัวอย่าง
// ค่าที่ได้จาก URL หรือ query string มักจะเป็น string เช่น "5"
// "5" === 5      // false (เพราะชนิดต่างกัน)
// Number("5") === 5  // true

function updatedata(id, name) {
  const x = listProduct.findIndex((product) => {
    return Number(id) === product.id;
  });

  // splice ทำหน้าที่ลบค่าในอาเรย์และอัปเดทค่าในอาเรย์
  // listProduct.splice (x,y,z) x = ลำดับข้อมูลที่จะอัปเดต , y = จำนวนสมาชิกที่ต้องการลบออกจากอาเรย์ , z = สมาชิกใหม่ที่ต้องการเพิ่มเข้าไปแทนที่
  // ถ้าเจอ index ที่ถูกต้อง ให้ทำการลบค่าที่ลำดับนั้นออกไป จำนวน 1 ลำดับ {id, name}เก่า และแทนที่ด้วย NewProduct {id, name}ใหม่
  if (x !== -1) {
    const newProduct = { id, name };

    listProduct.splice(x, 1, newProduct);
    return newProduct;
  }
  // ถ้าไม่เจอ index ที่ถูกต้อง ให้แสดงค่า null
  else {
    return null;
  }
}

// ฟังก์ชันสำหรับลบข้อมูล วิธีนี้จะใช้คู่กับ Method => Delete
// 1.หาตำแหน่งของสินค้า โดยที่ลูกค้าบอกผ่านไอดี id
// 2.กำหนดเงื่อนไข ถ้าหาสินค้าไม่เจอ ให้บอกลูกค้ากลับไปว่าไม่รู้  แต่  ถ้าพบให้ดำเนินการขั้นตอนถัดไป
// 3.ให้ดำเนินการนำสินค้าที่พบตำแหน่งนั้นไปทิ้ง นั้นคือลบข้อมูลในรูปแบบ {}

function deleteProduct(id) {
  const x = listProduct.findIndex((product) => {
    return Number(id) === product.id;
  });

  // ถ้าเจอ index ที่ถูกต้อง ให้ทำการลบค่าที่ลำดับน้ำออกไป จำนวน 1 ลำดับ {id, name}
  if (x !== -1) {
    const deletedProduct = listProduct.splice(x, 1);
    return deletedProduct;
  }

  // ถ้าไม่เจอ index ที่ถูกต้อง ให้แสดงค่า null
  else {
    return null;
  }
}

module.exports = {
  listProduct,
  addProduct,
  updatedata,
  deleteProduct,
};
