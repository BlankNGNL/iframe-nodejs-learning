//function statement
function greet(){
    console.log('hi');
}
greet();

//functionn are first-class
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

//function expression
let greetMe = function () {
    console.log('Hi Noella')
}
greetMe();

// it's first-class
logGreeting(greetMe);

// use a function expression on the fly, only use once
logGreeting(function () {
    console.log('Hoi Tjaban')
})