function Cart(localStorageKey){
  const cart ={
  cartItems : undefined,

loadFromStorage(){
this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
if(!this.cartItems){
  this.cartItems = [
  {
    productId: "1",
    quantity: 2,
    deliveryOptionId: "4",
  },
  {
    productId: "2",
    quantity: 1,
     deliveryOptionId: "5",
  },
 
   {
    productId: "3",
    quantity: 1,
     deliveryOptionId: "6",
  },

];
}
},

saveToStorage(){
  localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
},

 addToCart(productId){
  let matchingItem;

this.cartItems.forEach((cartItem) => {
  if(productId === cartItem.productId){
    matchingItem = cartItem;
   
  }
});

if(matchingItem){
  matchingItem.quantity += 1;
  
} else{
this.cartItems.push(
  {
    productId : productId, 
    quantity:1,
    deliveryOptionId: "4",

});

 }
 this.saveToStorage();
},

removeFromCart(productId){
  const newCart = [];
  this.cartItems.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  this.cartItems = newCart;
  this.saveToStorage();
},

updateDeliveryOption(productId, deliveryOptionId){
 
let matchingItem;

this.cartItems.forEach((cartItem) => {
  if(productId === cartItem.productId){
    matchingItem = cartItem;
  }
});

matchingItem.deliveryOptionId = deliveryOptionId;
this.saveToStorage();
}

};

return cart;

}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);














  










  