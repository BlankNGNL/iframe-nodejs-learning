// V8 Engine wraps the content of the code
// (function (exports, rquire, module,__filename,__dirname) {
//     let greet = function () {
//         console.log('Hello!');
//     };
//     module.exports = greet;
// })
//
// fn(module.exports, require, module, filename, dirname);
//
// return module.exports  (pass by reference) code is protected because function code is javascript
let greet = function () {
    console.log('Hello!')
};

module.exports = greet;


//summarise
//require is a function, that you pass a 'path' too
//module.exports is what the require function returns
//this works because your code is  actually wrapped in a function that is given these things as function parameters