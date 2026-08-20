
let studentName: string = "vaishnavi";
let age: number = 20;
let isStudent: boolean = true;
let marks: number[] = [90, 95, 88];
let subjects: string[] = ["Math", "Science", "English"];
function calculateAverage(scores: number[]): number {
    let sum: number = 0;

    for (let score of scores) {
        sum += score;
    }

    return sum / scores.length;
}
function displayStudent(
    name: string,
    age: number,
    isStudent: boolean
): void {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Student:", isStudent);
}

displayStudent(studentName, age, isStudent);
console.log("Subjects:", subjects);
console.log("Marks:", marks);
let average: number = calculateAverage(marks);
console.log("Average:", average);
let salary: number = 50000;
salary = 60000;         
marks.push(99);          

console.log("Updated Salary:", salary);
console.log("Updated Marks:", marks);