
export const cart = [
  {
    productId: 1,
    quantity: 2,
  },
  {
    productId: 2,
    quantity: 1,
  },
  {
    productId: 3,
    quantity: 4,
  }
];

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
cart.push({productId : productId, quantity:1});

 }
}