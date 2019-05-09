//object properties and methods
let object = {
    greet:'hello'
}

console.log(object.greet);
console.log(object['greet']);
let prop = 'greet'
console.log(object[prop]);

//functions and arrays
let arr = [];

arr.push(function () {
    console.log('Hello world 1')
});

arr.push(function () {
    console.log('Hello world 2')
});

arr.push(function () {
    console.log('Hello world 3')
});

arr.forEach(function (item) {
    item();
});