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
//    const y = listProduct[].find(({ id }) => {
//       return id === Number(x);
//     });

// อัปเดตข้อมูลสินค้า โดยหาสินค้าที่มีidที่userกำหนดและอัปเดตnameข้อมูลของสินค้านั้น
function updatedata(id, name) {
  const x = listProduct.findIndex((product) => {
    return Number(id) === product.id;
  });

  if (x !== -1) {
    const y = { id, name };
    listProduct.splice(x, 1, y); //x = ลำดับข้อมูลที่จะอัปเดต , 1 = จำนวนข้อมูลที่จะอัปเดต , y = { id, name } แทนที่ลำดับข้อมูลที่กำหนดไว้ นั้นคือxของเรา
    return y;
  } else {
    return null;
  }
}

module.exports = {
  listProduct,
  nameproduct,
  updatedata,
};
