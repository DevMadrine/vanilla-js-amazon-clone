export function getProduct(productId){
let matchingProduct;
products.forEach((product) => {
if(product.id === productId){
  matchingProduct = product;
}
});
return matchingProduct; 
}


export const products = [
  {
    id: "1",
    image: 'images/stocks.jpeg',
    name: 'Men stockings Black and white',
    rating:{
      stars: 4.5,
      count: 87
    },
    price: 1095
  },
    {
    id: "2",
    image: 'images/basketball.jpeg',
    name: 'Intermediate Size Basketball',
    rating:{
      stars: 4.0,
      count: 180
    },
    price: 1000
  },

    {
    id: "3",
    image: 'images/shirts.jpeg',
    name: 'Men cotton shirts 3 pieces',
    rating:{
      stars: 3.5,
      count: 59
    },
    price: 8709
  }

];