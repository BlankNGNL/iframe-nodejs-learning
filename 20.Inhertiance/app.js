function Person(firstname, lastname) {
    this.firstname = firstname;

    this.lastname = lastname;

}

/*add properties and methods to all objects
 created from this particular function constructor*/
Person.prototype.greet = function (){
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}

let person1 = new Person ('Noella','Schaap');
person1.greet();

let person2 = new Person('Sierla','Toonen')
person2.greet();