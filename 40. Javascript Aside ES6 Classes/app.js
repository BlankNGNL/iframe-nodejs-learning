'use strict'; //helps not to make silly mistakes, use in production code
let util = require('util');

class Person {
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet(){
        console.log('Hello ' + this.firstname + ' ' + this.lastname);
    }
}


let mike = new Person('Mike','Yan');
mike.greet();

let noella = new Person('Noella','Schaap');
noella.greet();

