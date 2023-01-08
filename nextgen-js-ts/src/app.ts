// Code goes here!
//
// const userName = 'Max';
// //userName = 'Maximilian';
// let age = 30;
// age = 29;
// //
// // function add(a: number, b: number) {
// //   let result;
// //   result = a + b;
// //   return result;
// // }
//
//
// // arrow function
// const add = (a: number, b: number = 1) => a + b;
//
// const printOutput: (a: number | string) => void = output => console.log(output);
// printOutput(add(5));
//
// const button = document.querySelector('button');
// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }

const hobbies = ['Sports', 'Cooking'];

const activeHobbies = ['Hiking'];


// spread operator
activeHobbies.push(...hobbies);

const person = {
    firstName: 'Max',
    age: 30
}

const copiedPerson = {...person};

// rest operator
// it will make an array of all the arguments passed to the function
const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);


// array and object destructuring
// ... remainingHobbies is a rest parameter, and it will make an array of all the remaining elements
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

// userName is new variable, and firstName is the name of the property in the object
const { firstName: userName, age } = person;
console.log(userName, age, person);