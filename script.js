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

const getLAstPosts = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).text };
};
// const getreq = getLAstPosts();
// getreq.then(res => console.log(res));

const lastpost2 = await getLAstPosts();
console.log(lastpost2);
