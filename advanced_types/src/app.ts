// intersection types
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Type guards
// function overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;

function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') { // this is a type guard
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('Max', ' Schwarz');
result.split(' ');

// optional chaining
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};


console.log(fetchedUserData?.job?.title);

// Nullish Coalescing
const userInput = '';
const storedData = userInput?? 'DEFAULT';
console.log(storedData);

//
// type UnknownEmployee = Employee | Admin;
//
// function printEmployeeInformation(emp: UnknownEmployee) {
// console.log('Name: ' + emp.name);
// if ('privileges' in emp) { // this is a type guard
//     console.log('Privileges: ' + emp.privileges);
// }
// if ('startDate' in emp) { // this is a type guard
//     console.log('Start Date: ' + emp.startDate);
// }
// }
//
// printEmployeeInformation(e1);
//
// class Car {
// drive() {
//     console.log('Driving...');
// }
// }
//
// class Truck {
// drive() {
//     console.log('Driving a truck...');
// }
//
// loadCargo(amount: number) {
//     console.log('Loading cargo...' + amount);
// }
// }
//
// type Vehicle = Car | Truck;
//
// const v1 = new Car();
// const v2 = new Truck();
//
// function useVehicle(vehicle: Vehicle) {
// vehicle.drive();
// if (vehicle instanceof Truck) { // this is a type guard
//     vehicle.loadCargo(1000);
// }
// }
//
// useVehicle(v1);
// useVehicle(v2);
//
//
// // Discriminated Unions - a pattern that helps us to use type guards easier
// interface Bird {
// type: 'bird'; // literal type
// flyingSpeed: number;
// }
//
// interface Horse {
// type: 'horse'; // literal type
// runningSpeed: number;
// }
//
// type Animal = Bird | Horse;
//
// // instanceof won´t work here because we don´t have a type but an interface
// function moveAnimal(animal: Animal) {
// let speed;
// switch (animal.type) {
//     case 'bird':
//         speed = animal.flyingSpeed;
//         break;
//     case 'horse':
//         speed = animal.runningSpeed;
//         break;
// }
// console.log('Moving at speed: ' + speed);
// }
//
// moveAnimal({type: 'bird', flyingSpeed: 10});
// moveAnimal({type: 'horse', runningSpeed: 20});
//
// // type casting
// // first way
// //const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// // second way (! is a non-null assertion operator)
// // if you don´t want to use !, you can use if statement to check if the element exists
// //     const userInputElement2 = document.getElementById('user-input')! as HTMLInputElement;
// //     userInputElement2.value = 'Hi there!';
// const userInputElement = document.getElementById('user-input');
// if (userInputElement) {
// (userInputElement as HTMLInputElement).value = 'Hi there!';
// }
//
//
// // Index properties
// interface ErrorContainer {
//
// [prop: string]: string; // this is an index property
//
// }
//
//
// const errorBag: ErrorContainer = {
// email: 'Not a valid email!',
// username: 'Must start with a capital character!'
// }

// Function Overloads
