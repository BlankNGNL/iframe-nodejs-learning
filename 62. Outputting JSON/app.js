let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'application/JSON'});
   let obj = {
       firstname: 'Noella',
       lastname: 'Schaap'
   };
   res.end(JSON.stringify(obj));

}).listen(1337,'127.0.0.1'); //127.0.0.1 = localho

