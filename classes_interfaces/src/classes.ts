abstract class Department{
    static fiscalYear = 2020;
    //private name: string; // public = default
    protected employees: string[] = [];

    // constructor = reserve key word
    constructor(protected readonly id: string, public name: string){
        // this.name = n;
    }

    static createEmployee(name: string){
        return {name: name};
    }
    abstract describe(this: Department): void;

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
    describe(){
        console.log('IT Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department{
    private lastReport: string;
    private static instance: AccountingDepartment;
    // setter
    set mostRecentReport(value: string){
        if(!value){
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    // getter
    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    // singleton & private constructor
    private constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance(){
        if(AccountingDepartment.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    // override method from parent class
    addEmployee(name: string){
        if(name === 'Max'){
            return;
        }

        // add employee if not Max
        this.employees.push(name);
    }


    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports(){
        console.log(this.reports);
    }
}

// static method is used without creating an instance of the class .i.e. new Department()
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.printEmployeeInformation();

console.log(it);

//const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);

accounting.mostRecentReport =`Year End Report`;
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);
accounting.addEmployee('Max'); // not added
accounting.addEmployee('Manu');

accounting.describe();
// accounting.printReports();
// accounting.printEmployeeInformation();
// const itCopy = { name: 'DUMMY', describe: it.describe };
// itCopy.describe();