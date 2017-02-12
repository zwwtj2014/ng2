import { A } from './A';

/**
 * Person
 */
class Person {
    constructor() {
    }

    public print(){
        let a = new A();
        console.log(a.a(''));
    }
}

let p = new Person();
p.print();