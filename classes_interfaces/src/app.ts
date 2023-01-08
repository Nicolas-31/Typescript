// interfaces
// if you want to work objects use interfaces otherwise type also works fine
//type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name?: string // readonly interface property
    outputName?: string // optional interface property
}

interface Greetable extends Named {

    greet(phrase: string): void;
}

// using interface with class
class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if (this.name) {
        console.log(phrase + ' ' + this.name);
        } else {
        console.log('Hi!');
        }
    }

}

let user1: Greetable;
user1 = new Person();

user1.greet('Hi there - I am');
console.log(user1);