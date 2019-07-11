let express = require('express');

let app = express();

let apiController = require('./controllers/apiController');
let htmlController = require('./controllers/htmlController');

let port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));  //Middleware(uploads/downloads)

app.set('view engine','ejs');

app.use('/', function (req,res,next) {
    console.log('Requested URL: ' + req.url);
    next();
});

apiController(app);
htmlController(app);

app.listen(port);