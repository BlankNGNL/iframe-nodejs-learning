let fs = require('fs');

let readable = fs.createReadStream(__dirname + '/greet.txt','utf8', {highWaterMark: 16 * 1024});

let writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data',function (chunk) {
    console.log(chunk);
    writeable.write(chunk);
});