
let value: any = 10;
console.log(value);
value = "Hello";
console.log(value);
value = true;
console.log(value);
let data: unknown = "TypeScript";

if (typeof data === "string") {
    console.log(data.toUpperCase());
}
function greet(name: string): void {
    console.log("Welcome " + name);
}

greet("vaishnavi");