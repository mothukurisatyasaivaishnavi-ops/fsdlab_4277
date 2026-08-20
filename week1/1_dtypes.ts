let age: number = 20;
let marks: number = 95.5;
let year: number = 2026;

console.log("Age:", age);
console.log("Marks:", marks);
console.log("Year:", year);



let studentName1: string = "vaishnavi";
let college: string = "SVECW";
let course: string = "AIML";

console.log("Name:", studentName1);
console.log("College:", college);
console.log("Course:", course);
console.log(`My name is ${studentName1} and I study ${course}.`);



let isStudent: boolean = true;
let isPlaced: boolean = false;

console.log("Is Student:", isStudent);
console.log("Is Placed:", isPlaced);



let studentName: string = "inha";
let studentAge: number = 21;
let passed: boolean = true;

console.log(`Name: ${studentName}, Age: ${studentAge}, Passed: ${passed}`);



function studentDetails(name: string, age: number, passed: boolean): void {
    console.log("Student Name:", name);
    console.log("Age:", age);
    console.log("Passed:", passed);

    if (passed) {
        console.log(`${name} has passed the exam.`);
    } else {
        console.log(`${name} has failed the exam.`);
    }
}

studentDetails("vaishnavi",19,true);
studentDetails("inha",21,false);