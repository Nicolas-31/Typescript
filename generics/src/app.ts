// built-in generics
// const names: Array<string> = []; // string[]
// // names[0].split(' ');
//
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000);
// });

// creating a generic function
// here extends is a constraint
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }
//
// const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
// console.log(mergedObj);
//
// interface Lengthy {
//     length: number;
// }
// function countAndPrint<T extends Lengthy>(element:T): [T, string] {
//     let descriptionText = 'Got no value.';
//     if(element.length === 1){
//         descriptionText = 'Got 1 element.';
//     } else if(element.length > 1){
//         descriptionText = 'Got ' + element.length + ' elements.';
//     }
//     return [element, descriptionText];
// }
//
// console.log(countAndPrint(['Sports', 'Cooking']));
//
// // keyof constraint
// function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
//     return 'Value: ' + obj[key];
// }
//
// extractAndConvert({ name: 'Max' }, 'name');
//
//
// // Generic Classes
// class DataStorage<T extends string | number | boolean> {
//     private data: T[] = [];
//
//     addItem(item: T) {
//         this.data.push(item);
//     }
//
//     removeItem(item: T) {
//         if (this.data.indexOf(item) === -1) {
//             return;
//         }
//         this.data.splice(this.data.indexOf(item), 1); // -1
//     }
//
//     getItems() {
//         return [...this.data];
//     }
// }
//
// const textStorage = new DataStorage<string>();
// textStorage.addItem('Max');
// textStorage.addItem('Manu');
// textStorage.removeItem('Max');
// console.log(textStorage.getItems());
//

// generic utility types
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    // Partial makes all properties optional
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');  // not allowed since it is readonly
// names.pop();        // not allowed since it is readonly

