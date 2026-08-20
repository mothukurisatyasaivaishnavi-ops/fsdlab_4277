"use strict";
function addNumbers(a, b) {
    return a + b;
}
function greet(name, message) {
    if (message) {
        console.log(message + ", " + name);
    }
    else {
        console.log("Hello " + name);
    }
}
function calculateBill(amount, tax = 5) {
    return amount + (amount * tax / 100);
}
function findTotal(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log("Sum:", addNumbers(20, 30));
greet("Vaishnavi");
greet("Vaishnavi", "Evening");
console.log("Bill:", calculateBill(1000));
console.log("Bill:", calculateBill(1000, 10));
console.log("Total:", findTotal(10, 20, 30, 40));
