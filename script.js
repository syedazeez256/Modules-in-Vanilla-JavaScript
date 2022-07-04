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
