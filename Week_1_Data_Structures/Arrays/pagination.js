// pagination.js
// Paginate an array of products

const products = [
  "Shoes", "Bags", "Watches", "Hats", "Sunglasses", "Belts"
];

function paginate(arr, page = 1, perPage = 2) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return arr.slice(start, end);
}

console.log("Page 1:", paginate(products, 1)); // ["Shoes", "Bags"]
console.log("Page 2:", paginate(products, 2)); // ["Watches", "Hats"]
console.log("Page 3:", paginate(products, 3)); // ["Sunglasses", "Belts"]
