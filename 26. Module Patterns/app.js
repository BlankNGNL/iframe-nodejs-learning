let greet = require ('./greet1');
greet();

let greet2 = require ('./greet2').greet;
greet2();

let greet3 = require ('./greet3');
greet3.greet(); //print Hello World@@@ with object
greet3.greeting = 'Change text'

let greet3b = require('./greet3'); //reference to same object
greet3b.greet();

let Greet4 = require('./greet4');
let object1 = new Greet4(); //Different Object
object1.greet();
let object2 = new Greet4(); //Different Object
object2.greet();

let greet5 = require('./greet5');
greet5.greet();
greet5.bye();

