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

module.exports = {
  listProduct,
  nameproduct,
};
