import { cart } from "../data/cart.js";
import { products } from "../data/products.js"; 

let cartSummary ='';

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;
  products.forEach((product) => {
    if(product.id === productId){
      matchingProduct = product;
    }
  });

  console.log(matchingProduct);

  cartSummary +=  

` <div class="checkout-container">
      <p class="delivery-date">Delivery date: Monday, February 2</p>
      <div class="checkout-items">
        <img class="delivery-image" src="${matchingProduct.image}" alt="">
        <div class="checkout-item-details">
          <p>${matchingProduct.name}</p>
          <p>$${matchingProduct.price/100}</p>
          <p>Quantity:${cartItem.quantity} <span>Update</span> <span>Delete</span></p>
        </div>
        <div class="delivery-options">
          <div class="shipping-dates">
            <input type="radio">
            <label for="">
              Monday, February 2<br>
              <span class="free">FREE Shipping</span>
            </label>
          </div>
            <div class="shipping-dates">
            <input type="radio">
            <label for="">
              Tuesday, January 27<br>
              <span class="free">$4.99 -Shipping</span>
            </label>
          </div>
            <div class="shipping-dates">
            <input type="radio">
            <label for="">
              Friday, January 23<br>
              <span class="free">$9.99 -Shipping</span>
            </label>
          </div>
          </div>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.js-order-summary').innerHTML = cartSummary;

