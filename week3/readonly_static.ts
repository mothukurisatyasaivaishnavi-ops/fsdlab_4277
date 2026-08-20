class Product {
    readonly productId: number;
    productName: string;

    static category: string = "Electronics";

    constructor(id: number, name: string) {
        this.productId = id;
        this.productName = name;
    }

    displayProduct(): void {
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