var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
}

function addToCart(item) {
  // write your code here
 var price = Math.random() * 100;
 var roundedPrice = Math.floor(price);
 cart.push({[item]: roundedPrice});
 console.log(item + " has been returned to your cart.");
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length > 0) {
    var list = [];
    for (var i = 0; i < cart.length; i++) {
      var myItems = Object.keys(cart[i]);
      list.push( " " + myItems + " at $" + cart[i][myItems] );
    }
  console.log("In your cart, you have" + list + ".");
} else {
  console.log("Your shopping cart is empty.");
}

}

function total() {
  // write your code here
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    var item = cart[i];
    var itemName = Object.keys(item)[0];
    total += item[itemName];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  console.log(item);
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
}
