'use strict';
const products = require('./products.interface');
class Products {
	constructor() {
		displayProducts();
		leastPriceWithThisName('Stamps and Flowers - Amethyst')
	}
}

function displayProducts() {
	let productNamePrice = [];
	products.map((product,index)=>{
		productNamePrice.push({
			productName: product.productName,
			productPrice: product.productPrice
		})
	})
	console.log('products', productNamePrice); // productNamePrice contains only 'productName' and 'productPrice'
	
	console.log("--------------------------------------------------------------------------------------")
}


function leastPriceWithThisName(name) {

	const productsArray = products.filter(product => product.productName == name);
	let leastValue = productsArray[0].productPrice; //let suppose we have least product price 
	let product = productsArray[0]; // and also suppose obj with least price
	productsArray.forEach((p, i) => {
		if(leastValue > p.productPrice){
			leastValue = p.productPrice
			 product = p;
		}
	});
	console.log('products with least price', product);  //this is the obj that have least price of product
	
}










// Do not edit below this line
const product = new Products();
