// import { addToCart, totalPrice as price, tq } from './shoopingCart.js';
// console.log(price, tq);
// addToCart('bread', 5);

console.log('Importing Module');
// import * as ShoopingCart from './shoopingCart.js';
// ShoopingCart.addToCart('bread', 8);
// console.log(ShoopingCart.tq);
// console.log(price);

import add, { cart } from './shoopingCart.js';
add('pizza', 3);
add('bread', 4);
add('apples', 5);
console.log(cart);

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLAstPosts = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   return { title: data.at(-1).title, text: data.at(-1).text };
// };
// // const getreq = getLAstPosts();
// // getreq.then(res => console.log(res));

// const lastpost2 = await getLAstPosts();
// console.log(lastpost2);

// const getValues = (function () {
//   const cart = [];
//   const totalPrice = 23;
//   const totalQuantity = 238;
//   const addToCart = (product, quantity) => {
//     cart.push(product, quantity);
//     console.log(`${quantity}, ${product} added to cart`);
//   };
//   const orderCart = (product, quantity) => {
//     cart.push(product, quantity);
//     console.log(`${quantity}, ${product} ordered to cart`);
//   };
//   return { cart, totalPrice, totalQuantity, addToCart };
// })();
// getValues.addToCart('pizza', 3);
// getValues.addToCart('apples', 5);

// Exporting CommonJS Modules but its not working because its use only in Node.JS
// export.addToCart = (product, quantity) => {
//         cart.push(product, quantity);
//         console.log(`${quantity}, ${product} added to cart`);
//       };

// Importing
// import { addToCart } from './shoopingCart.js';
