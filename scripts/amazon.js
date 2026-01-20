let productHTML =  '';

products.forEach((product) =>{
  productHTML +=  `

  <div class="product-container">
    <div class="product-image-container">
      <img class="product-image" src="${product.image}">
    </div>
  <div class="product-name">${product.name}</div>
       <div class="product-rating-container">
       <img src="images/star-${product.rating.stars*10}.png" alt="" class="product-rating-stars">
      <div class="product-rating-count">${product.rating.count}</div>
  </div>
  <div class="product-price">
    $${(product.price/100).toFixed(2)}
  </div>
  <div class="product-quantity">
  <select class="quantity-select">
   <option selected value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
         <option value="6">6</option>
         <option value="7">7</option>
         <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
  </select>
  </div>
 <div class="product-spacer"></div>
 <div class="added-to-cart">
<img src="">
  
  </div>
 <button class="add-to-cart">
 Add to Cart
 </button>
  </div>
  `
});

console.log(productHTML);

document.querySelector('.js-products-grid').innerHTML = productHTML;
