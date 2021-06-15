var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
}

function addToCart(item) {
  // write your code here
 var price = Math.floor(Math.random() * 100);
 var cartItem = { [item]: price };
 console.log(`${item} has been added to your cart.`);
 return getCart();
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } 
  let statementArray = [];
  let i = 0; l = cart.length;
  while (i < l) {
    var item = Object.keys(cart[i])[0];
    var price = cart[i][item];
    statementArray.push(item + " at $" + price);
  }
  console.log(`In your cart, you have ${statementArray.join(', ')}.`)
}

function total() {
  // write your code here
  let t = 0;
  return t;
}

function removeFromCart(item) {
  // write your code here
  var inCart = false;
  for (var n = 0; l = cart.length; n < l; n++) {
    if (cart[n].hasOwnProperty(item)) {
      var inCart = true;
      cart.shift(item);
    }
  }
  if (!inCart) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log("We don't have a card number on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart [];
}
