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

function nameproduct(name) {
  const id = listProduct.length;
  listProduct.push({
    id: id,
    name: name,
  });

  return { id, name };
}

// สำหรับค้นหาแค่ตัวแปลในอาเรย์แบบเจาะจง
// function updatedata(id,name) {
//    const y = listProduct[] ลำดับ เริ่มนับจาก 0

// อัปเดตข้อมูลสินค้า โดยหาสินค้าที่มีidที่userกำหนดและอัปเดตnameข้อมูลของสินค้านั้น
function updatedata(id, name) {
  // findindex คือ หาลำดับ  ค่าที่ได้จากตัวแปลxจะเท่ากับ = ค่าลำดับ แต่ถ้าไม่เจอจะส่งค่า -1 กลับมา
  const x = listProduct.findIndex((product) => {
    // Number(id) คือการแปลงค่าที่ user ใส่เข้ามาและแปลงเป็นตัวเลข จากนั้นเปรียบเทียบค่าที่กรอกมานั้น เท่ากับเลขid
    return Number(id) === product.id;
  });

  if (x !== -1) {
    const newProduct = { id, name };
    // splice ทำหน้าที่ลบค่าในอาเรย์ และ อัปเดทค่าในอาเรย์
    listProduct.splice(x, 1, newProduct); //x = ลำดับข้อมูลที่จะอัปเดต , 1 = จำนวนข้อมูลที่จะอัปเดต , newProduct = { id, name } แทนที่ลำดับข้อมูลที่กำหนดไว้ นั้นคือxของเรา
    return newProduct;
  } else {
    return null;
  }
}

// ฟังก์ชันสำหรับลบข้อมูล
// 1.หาตำแหน่งของสินค้า โดยที่ลูกค้าบอกผ่านไอดี id
// 2.กำหนดเงื่อนไข ถ้าหาสินค้าไม่เจอ ให้บอกลูกค้ากลับไปว่าไม่รู้  แต่  ถ้ารู้ให้ดำเนินการขั้นตอนถัดไป
// 3.ให้ดำเนินการนำสินค้าที่พบตำแหน่งนั้นไปทิ้ง นั้นคือลบ {} แปลว่าลบสินค้านั้นออกไป

function deleteProduct(id) {
  const x = listProduct.findIndex((product) => {
    return Number(id) === product.id;
  });

  if (x !== -1) {
    // splice ทำหน้าที่ลบค่าในอาเรย์ และ อัปเดทค่าในอาเรย์
    //x = ลำดับข้อมูลที่จะอัปเดต , 1 = จำนวนข้อมูลที่จะอัปเดต , newProduct = { id, name } แทนที่ลำดับข้อมูลที่กำหนดไว้ นั้นคือxของเรา
    const deletedProduct = listProduct.splice(x, 1);
    return deletedProduct;
  } else {
    return null;
  }
}

module.exports = {
  listProduct,
  nameproduct,
  updatedata,
  deleteProduct,
};
