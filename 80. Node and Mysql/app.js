let express = require('express');
let app = express();
let mysql = require('mysql');

let apiController = require('./controllers/apiController');
let htmlController = require('./controllers/htmlController');

let port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));  //Middleware(uploads/downloads)

app.set('view engine','ejs');

app.use('/', function (req,res,next) {
    console.log('Requested URL: ' + req.url);
    let con = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'test',
        database : 'iframe'
    });

    con.query('SELECT * FROM iframe.person;',
        function(err, rows) {
                 if(err) throw err;
                 console.log(rows);
                 console.log(rows[0].firstname);
        }
    );
    next();
});

apiController(app);
htmlController(app);

app.listen(port);