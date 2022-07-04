// Exporting Module

// Blocking Execution
// console.log('Start fetching');
// await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log('Complete fetching');

console.log('Exporting Module');

const orders = [2, 3, 4];
export const cart = [];

export const addToCart = (product, quantity) => {
  cart.push(product, quantity);
  console.log(`${quantity}, ${product} added to cart`);
};

const totalPrice = 23;
const totalQuantity = 238;

export { totalPrice, totalQuantity as tq };

export default (product, quantity) => {
  cart.push(product, quantity);
  console.log(`${quantity}, ${product} added to cart`);
};
