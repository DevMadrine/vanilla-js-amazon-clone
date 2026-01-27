export let cart;

loadFromStorage();

export function loadFromStorage(){
cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart = [
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
}



function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){
  let matchingItem;

cart.forEach((cartItem) => {
  if(productId === cartItem.productId){
    matchingItem = cartItem;
   
  }
});

if(matchingItem){
  matchingItem.quantity += 1;
  
} else{
cart.push(
  {
    productId : productId, 
    quantity:1,
    deliveryOptionId: "4",

});

 }
 saveToStorage();
}


export function removeFromCart(productId){
  const newCart = [];
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId){
 
let matchingItem;

cart.forEach((cartItem) => {
  if(productId === cartItem.productId){
    matchingItem = cartItem;
  }
});

matchingItem.deliveryOptionId = deliveryOptionId;
saveToStorage();

}
  