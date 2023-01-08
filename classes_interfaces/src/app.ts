class Department{
    //private name: string; // public = default
    private employees: string[] = [];

    // constructor = reserve key word
    constructor(private readonly id: string, public name: string){
        // this.name = n;
    }
    describe(this: Department){
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


// inheritance
class ITDepartment extends Department{
    constructor(id: string, public admins: string[]){
        super(id, 'IT');
    }
}

class AccountingDepartment extends Department{
    constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
    }

    addReport(text: string){
        this.reports.push(text);
    }

    printReports(){
        console.log(this.reports);
    }
}

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);
console.log(accounting);

// const itCopy = { name: 'DUMMY', describe: it.describe };
// itCopy.describe();