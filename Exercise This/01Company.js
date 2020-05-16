class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        if (!username || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        }

        let currentDep = this.departments.find(x => x.name === department);
        const employee = {
            username: username,
            salary: salary,
            position: position
        };
        if (!currentDep) {
            this.departments.push({
                name: department,
                employees: [employee],
                averageSalary: function () {
                    return this.employees.reduce((a, b) => {
                        a += b.salary;
                        return a;
                    }, 0) / this.employees.length;
                }
            })
        } else {
            currentDep.employees.push(employee);
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDep = [...this.departments].sort((a, b) => b.averageSalary() - a.averageSalary())[0];
        let result = `Best Department is: ${bestDep.name}\n`;
        result += `Average salary: ${bestDep.averageSalary().toFixed(2)}\n`;
        bestDep.employees
            .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))
            .map(x => result += `${x.username} ${x.salary} ${x.position}\n`);

        return result;
    }
}


let c = new Company();
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
console.log(c.bestDepartment());
