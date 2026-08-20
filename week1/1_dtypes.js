"use strict";
let age = 20;
let marks = 95.5;
let year = 2026;
console.log("Age:", age);
console.log("Marks:", marks);
console.log("Year:", year);
let studentName1 = "vaishnavi";
let college = "SVECW";
let course = "AIML";
console.log("Name:", studentName1);
console.log("College:", college);
console.log("Course:", course);
console.log(`My name is ${studentName1} and I study ${course}.`);
let isStudent = true;
let isPlaced = false;
console.log("Is Student:", isStudent);
console.log("Is Placed:", isPlaced);
let studentName = "inha";
let studentAge = 21;
let passed = true;
console.log(`Name: ${studentName}, Age: ${studentAge}, Passed: ${passed}`);
function studentDetails(name, age, passed) {
    console.log("Student Name:", name);
    console.log("Age:", age);
    console.log("Passed:", passed);
    if (passed) {
        console.log(`${name} has passed the exam.`);
    }
    else {
        console.log(`${name} has failed the exam.`);
    }
}
studentDetails("vaishnavi", 19, true);
studentDetails("inha", 21, false);
