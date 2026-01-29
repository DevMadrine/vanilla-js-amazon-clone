import {formatCurrency} from '../scripts/utils/money.js'

export function getProduct(productId){
let matchingProduct;
products.forEach((product) => {
if(product.id === productId){
  matchingProduct = product;
}
});
return matchingProduct; 
}

class Product{
  id;
  image;
  name;
  rating;
  price;

  constructor(productDetails){
  this.id = productDetails.id;
  this.image = productDetails.image;
  this.name=productDetails.name;
  this.rating = productDetails.rating;
  this.price = productDetails.price;

  }

  getStarUrl(){
    return `images/ratings/star-${this.rating.stars*10}.png`;
  }
  getPrice(){
    return `$${formatCurrency(this.price)}`;
  }
  extraHTMLInfor(){
    return '';
  }

}

class Clothing extends Product{
sizeChartLink;
constructor(productDetails){
super(productDetails);
this.sizeChartLink = productDetails.sizeChartLink;
}

extraHTMLInfor(){
  return `
  <a href="${this.sizeChartLink}" target="_blank">
  Size Chart
  </a>
  `
}
}

const tshirt = new Clothing(
   {
    id: "3",
    image: 'images/shirts.jpeg',
    name: 'Men cotton shirts 3 pieces',
    rating:{
      stars: 3.5,
      count: 59
    },
    price: 8709,
    type: 'clothing',

  }
);

console.log(tshirt);
export const products = [
  {
    id: "1",
    image: 'images/stocks.jpeg',
    name: 'Men stockings Black and white',
    rating:{
      stars: 4.5,
      count: 87
    },
    price: 1095,

  },
    {
    id: "2",
    image: 'images/basketball.jpeg',
    name: 'Intermediate Size Basketball',
    rating:{
      stars: 4.0,
      count: 180
    },
    price: 1000,

   

  },

    {
    id: "3",
    image: 'images/shirts.jpeg',
    name: 'Men cotton shirts 3 pieces',
    rating:{
      stars: 3.5,
      count: 59
    },
    price: 8709,
    sizeChartLink: 'images/basketball.jpeg',
    type: 'clothing'

  }

].map((productDetails) =>{
  if(productDetails.type === 'clothing'){
     return new Clothing(productDetails);
  }

  return new Product(productDetails);
  
});

console.log(products);