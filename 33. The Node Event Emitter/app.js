let Emitter = require('./emitter');

let emtr = new Emitter();

emtr.on('greet', function () {
        console.log('Somewhere, someone said hello.');
});

emtr.on('greet',function () {
    console.log('A greeting occurried!');
});
;

console.log('Hello!')
emtr.emit('greet');