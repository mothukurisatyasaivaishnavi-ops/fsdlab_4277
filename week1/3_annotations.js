"use strict";
let studentName = "vaishnavi";
let age = 20;
let isStudent = true;
let marks = [90, 95, 88];
let subjects = ["Math", "Science", "English"];
function calculateAverage(scores) {
    let sum = 0;
    for (let score of scores) {
        sum += score;
    }
    return sum / scores.length;
}
function displayStudent(name, age, isStudent) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Student:", isStudent);
}
displayStudent(studentName, age, isStudent);
console.log("Subjects:", subjects);
console.log("Marks:", marks);
let average = calculateAverage(marks);
console.log("Average:", average);
let salary = 50000;
salary = 60000;
marks.push(99);
console.log("Updated Salary:", salary);
console.log("Updated Marks:", marks);
