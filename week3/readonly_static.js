"use strict";
class Product {
    productId;
    productName;
    static category = "Electronics";
    constructor(id, name) {
        this.productId = id;
        this.productName = name;
    }
    displayProduct() {
        console.log("Product ID:", this.productId);
        console.log("Product Name:", this.productName);
        console.log("Category:", Product.category);
    }
}
let product1 = new Product(101, "Mouse");
let product2 = new Product(102, "speakers");
product1.displayProduct();
product2.displayProduct();
console.log("Common Category:", Product.category);
