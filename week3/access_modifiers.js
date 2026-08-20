"use strict";
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    showName() {
        console.log("Employee:", this.name);
    }
    showSalary() {
        console.log("Salary:", this.salary);
    }
    showEmployee() {
        this.showSalary();
    }
}
class Manager extends Employee {
    displayDepartment() {
        console.log("Department:", this.department);
    }
}
let manager = new Manager("abhiram", 45000, "Development");
manager.showName();
manager.showEmployee();
manager.displayDepartment();
