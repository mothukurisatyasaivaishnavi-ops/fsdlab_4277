"use strict";
function square(num) {
    return num * num;
}
const squareArrow = (num) => {
    return num * num;
};
const multiply = (a, b) => a * b;
const greet = (name) => {
    console.log("Hello " + name);
};
console.log("Square:", square(6));
console.log("Square using arrow:", squareArrow(6));
console.log("Multiplication:", multiply(5, 4));
greet("Viashnavi");
