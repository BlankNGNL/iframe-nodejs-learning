let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {
    if (req.url ==='/'){
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    }

    else if(req.url === '/api'){
        res.writeHead(200, {'Content-Type': 'application/JSON'});
        let obj = {
            firstname: 'Noella',
            lastname: 'Schaap'
        };
        res.end(JSON.stringify(obj));
    }
    else{
        res.writeHead(404);
        res.end();
    }

}).listen(1337,'127.0.0.1'); //127.0.0.1 = localho

// Basic Idea of Routing