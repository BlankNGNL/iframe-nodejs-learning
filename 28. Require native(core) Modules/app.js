let util = require('util');

let name = 'Mike';
let greeting = util.format('Hello, %s', name);
util.log(greeting);