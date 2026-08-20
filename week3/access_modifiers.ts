class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public showName(): void {
        console.log("Employee:", this.name);
    }

    private showSalary(): void {
        console.log("Salary:", this.salary);
    }

    showEmployee(): void {
        this.showSalary();
    }
}

class Manager extends Employee {
    displayDepartment(): void {
        console.log("Department:", this.department);
    }
}

let manager = new Manager("abhiram", 45000, "Development");

manager.showName();
manager.showEmployee();
manager.displayDepartment();