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

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 4 },
  ],
  user: { loggedIn: true },
  hello: false,
};

// deep copy ///////////////
const starClone1 = JSON.parse(JSON.stringify(state));
state.user.loggedIn = false;
console.log(starClone1);

// shallow copy
const starClone = Object.assign({}, state);
const newObj = cloneDeep(state);

state.user.loggedIn = false;
console.log(starClone);

// console.log(state);

console.log(newObj);

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

import cloneDeep from 'lodash-es';

if (module.hot) {
  module.hot.accept();
}
class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting} ${this.name}`);
  }
}

const Jonas = new Person('Jonas');

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('Test').then(x => console.log(x));

// import 'core-js/stable';
import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polyfilling of Async Functions
import 'regenerator-runtime/runtime';
