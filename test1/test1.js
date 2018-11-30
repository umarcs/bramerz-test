'use strict';




const products = require('./products.interface');

class Products {
	constructor() {
		displayProducts();
		
		const productName = 'Stamps and Flowers - Amethyst';
		return leastPriceWithThisName(productName);
	}
}

function displayProducts() {
	const productNamePrice = products.map(product => {
		return {
			productName: product.productName,
			productPrice: product.productPrice
		}
	})
	console.log('products', productNamePrice); // productNamePrice contains only 'productName' and 'productPrice'
}


function leastPriceWithThisName(name) {
	const filteredProducts= products.filter(product => product.productName == name);
	let leastPriceProduct = filteredProducts[0]; // consider first product having least price
	filteredProducts.forEach(p => {
		if (p.productPrice < leastPriceProduct.productPrice) {
			leastPriceProduct = p;
		}
	});
	console.log('products with least price', leastPriceProduct);  //this is the obj that have least price of product 
	return leastPriceProduct;
}

// Do not edit below this line
const product = new Products();