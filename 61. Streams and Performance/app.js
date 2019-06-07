let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res); //will be buffered and then piped out. Using streams to improve performance

}).listen(1337,'127.0.0.1'); //127.0.0.1 = localho

// Use Streams whenever you can and when you don't use them , make sure it's on purporse.