import { cart, removeFromCart } from "../data/cart.js";
import { products } from "../data/products.js"; 
import { formatCurrency } from "./utils/money.js";

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
          <p>$${formatCurrency(matchingProduct.price)}</p>
          <div>
           <span>Quantity:${cartItem.quantity}</span>
           <span class="update-quantity-link link-primary">Update</span> 
           <span class="delete-quantity-link link-primary js-order-delete" data-product-id="${matchingProduct.id}">Delete</span>
          </div>
        </div>
        <div class="delivery-options">
          <div class="shipping-dates">
            <input type="radio" name="shipping-${matchingProduct.id}" checked>
            <label for="">
              Monday, February 2<br>
              <span class="free">FREE Shipping</span>
            </label>
          </div>
            <div class="shipping-dates">
            <input type="radio" name="shipping-${matchingProduct.id}">
            <label for="">
              Tuesday, January 27<br>
              <span class="free">$4.99 -Shipping</span>
            </label>
          </div>
            <div class="shipping-dates">
            <input type="radio" name="shipping-${matchingProduct.id}">
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
document.querySelectorAll('.js-order-delete').forEach((link) => {
  link.addEventListener('click', (e) => {
   const productId = link.dataset.productId;
   removeFromCart((productId));
   console.log(cart);
  });
});

