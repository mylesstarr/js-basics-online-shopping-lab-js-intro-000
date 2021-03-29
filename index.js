var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
 cart.push({[itemName]:'item', [itemPrice]:getRandomInt(100)})
 return (`${itemName} has been added to your cart`)
}

function viewCart() {
  return(cart)
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
