import {cart} from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOtion } from "../../data/deliveryOptions.js";
import { formatCurrency } from "../utils/money.js";

export  function renderPaymentSummary(){
let productPrice = 0;
let shippingPrice = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
   productPrice += product.price * cartItem.quantity;

   const deliveryOption= getDeliveryOtion(cartItem.deliveryOptionId);
   shippingPrice += deliveryOption.price;
  });
  // console.log(productPrice);
  // console.log(shippingPrice);

  const totalPrice = productPrice + shippingPrice;
  const taxCents = Math.round(totalPrice * 0.1);
  const grandTotal = totalPrice + taxCents;

  const paymentSummaryHTML = `
    <div class="payment-summary-title"> Order Summary</div>
   <div class="payment-summary-row">
    <div>Items (3):</div>
    <div class="payment-summary-money">$${formatCurrency(productPrice)}</div>
   </div>

   <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">$${formatCurrency(shippingPrice)}</div>
   </div>

   <div class="payment-summary-row ">
    <div>Total before tax:</div>
    <div class="payment-summary-money sub-total-row">$${formatCurrency(totalPrice)}</div>
   </div>

   <div class="payment-summary-row ">
    <div>Estimated tax(10%):</div>
    <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
   </div>

   <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">$${formatCurrency(grandTotal)}</div>
   </div>

   <button class="order-button">Place your Order</button>
    `;

    document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;

 }