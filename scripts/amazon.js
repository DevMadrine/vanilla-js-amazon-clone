const products = [
  {

    image: 'breakfast',
    name: 'Breakfast',
    rating:{
      stars: 4.5,
      count: 87
    },
    price: 1095
  },
    {

    image: 'breakfast',
    name: 'Lunch',
    rating:{
      stars: 4.0,
      count: 180
    },
    price: 1000
  },

    {

    image: 'breakfast',
    name: 'Drinks',
    rating:{
      stars: 5.0,
      count: 59
    },
    price: 8709
  }

];

let productHTML =  '';

products.forEach((product) =>{
  productHTML +=  `

  <div class="product-container">
    <div class="product-image-container">
      <img src="./images/${product.image}.jpg" alt="breakfast">
    </div>
    <div class="product-name">${product.name}</div>
    <div class="product-rating-container">
      <img src="${product.rating.stars}.jpg" alt="" class="product-rating-stars">
      <div class="product-rating-count">${product.rating.count}</div>
    </div>
    <div class="product-price">
      $${(product.price/100).toFixed(2)}
    </div>
    <div class="product-quantity">
      <select>
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
    Added
    </div>
  <button class="add-to-cart">
    Add to Cart
  </button>
  </div>
  `
});

console.log(productHTML);

document.querySelector('.js-products-grid').innerHTML = productHTML;
