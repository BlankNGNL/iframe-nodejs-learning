let Emitter = require('events'); //global
let eventConfig = require('./config').events;
let emtr = new Emitter();

emtr.on(eventConfig.GREET, function () {
    console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET,function () {
    console.log('A greeting occurried!');
});
;

console.log('Hello!')
emtr.emit(eventConfig.GREET);