function square(num: number): number {
    return num * num;
}

const squareArrow = (num: number): number => {
    return num * num;
};

const multiply = (a: number, b: number): number => a * b;
const greet = (name: string): void => {
    console.log("Hello " + name);
};

console.log("Square:", square(6));
console.log("Square using arrow:", squareArrow(6));
console.log("Multiplication:", multiply(5, 4));

greet("Viashnavi");