/*
Pure vs Impure Functions:
--------------
A pure function is a function which:
Given the same input, will always return the same output.
Produces no side effects.
*/
const highpass = (cutoff, value) => value >= cutoff;
highpass(5, 5); // => true
highpass(5, 5); // => true
highpass(5, 5); // => true
highpass(5, 1);   // false
highpass(5, 123); // true

//Impure Function

// impure addToCart mutates existing cart
const addToCart = (cart, item, quantity) => {
  cart.items.push({
    item,
    quantity
  });
  return cart;
};

// Pure addToCart() returns a new cart
// It does not mutate the original.
const addToCart = (cart, item, quantity) => {
  const newCart = lodash.cloneDeep(cart);
// const newCart={...cart}; 
  newCart.items.push({
    item,
    quantity
  });
  return newCart;
};