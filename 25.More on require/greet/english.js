let json = require('./greetings.json');

let greet = function (){
    console.log(json.en);
}

module.exports = greet;