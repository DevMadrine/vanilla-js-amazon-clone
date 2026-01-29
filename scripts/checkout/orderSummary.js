import {cart, removeFromCart, updateDeliveryOption} from "../../data/cart.js";
import { getProduct} from "../../data/products.js"; 
import { formatCurrency } from "../utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOptions, getDeliveryOtion } from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";



export function renderOrderSummary(){

let cartSummary ='';

cart.forEach((cartItem) => {
const productId = cartItem.productId;
const matchingProduct = getProduct(productId);

console.log(matchingProduct);


const deliveryOptionId = cartItem.deliveryOptionId;
const deliveryOption = getDeliveryOtion(deliveryOptionId);


const today = dayjs();
const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
const dateString = deliveryDate.format('dddd, MMMM D');

cartSummary +=  

` <div class="checkout-container js-cart-item-container js-cart-item-container-${matchingProduct.id}">
    <p class="delivery-date">Delivery date: ${dateString}</p>
    <div class="checkout-items">
      <img class="delivery-image" src="${matchingProduct.image}" alt="">
      <div class="checkout-item-details">
        <p>${matchingProduct.name}</p>
        <p>$${formatCurrency(matchingProduct.price)}</p>
        <div class="product-quantity js-product-quantity-${matchingProduct.id}">
          <span>Quantity:${cartItem.quantity}</span>
          <span class="update-quantity-link link-primary">Update</span> 
          <span class="delete-quantity-link link-primary js-order-delete
          js-delete-link-${matchingProduct.id}" 
          data-product-id="${matchingProduct.id}">Delete</span>
        </div>
      </div>
      <div class="delivery-options">
    <div class="delivery-options-title">Choose a delivery option</div>
      ${deliveryOptionsHTML(matchingProduct, cartItem)}

      </div>
    </div>
  </div>
`;
});


function deliveryOptionsHTML(matchingProduct, cartItem){
let html = '';

deliveryOptions.forEach((deliveryOption)=>{

const today = dayjs();
const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
const dateString = deliveryDate.format('dddd, MMMM D');
const priceString = deliveryOption.price === 0 ? 'FREE ' : `$${formatCurrency(deliveryOption.price)} -`;

const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

html +=
`
  <div class="shipping-dates js-delivery-options" data-product-id="${matchingProduct.id}" 
  data-delivery-option-id="${deliveryOption.id}">
          <input type="radio" name="shipping-${matchingProduct.id}" 
         ${isChecked ? 'checked' : ''}
          >
          <label for="">
            ${dateString}<br>
            <span class="free">${priceString} Shipping</span>
          </label>
  </div>
`
});
return html;
}


document.querySelector('.js-order-summary').innerHTML = cartSummary;

document.querySelectorAll('.js-order-delete').forEach((link) => {
link.addEventListener('click', () => {
  const productId = link.dataset.productId;
  removeFromCart((productId));

const container = document.querySelector(`.js-cart-item-container-${productId}`);
container.remove();
renderPaymentSummary();
});
});

document.querySelectorAll('.js-delivery-options').forEach((element) => {
  element.addEventListener('click', () => {
    const {productId, deliveryOptionId} = element.dataset;
    updateDeliveryOption(productId, deliveryOptionId);
    renderOrderSummary();
    renderPaymentSummary();
  });
  
});
}



