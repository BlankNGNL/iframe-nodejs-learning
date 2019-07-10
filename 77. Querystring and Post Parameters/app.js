let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let port = process.env.PORT || 3000;
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();
app.use('/assets', express.static(__dirname + '/public'));  //Middleware(uploads/downloads)

app.set('view engine','ejs');

app.use('/', function (req,res,next) {
    console.log('Requested URL: ' + req.url);
    next();
});

app.get('/',function (req,res) {
 res.render('index'); // where the views are , express will search for it
});

app.get('/person/:id',function (req,res) {
   res.render('person',{ID: req.params.id, Qstr: req.query.qstr});
});

app.post('/person',urlencodedParser,function (req,res) {
    res.send('Thank You!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/personjson',jsonParser,function (req,res) {
    res.send('Thank you for the JSON data!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.get('/api',function (req,res) {
    res.json({firstname: 'Noella', lastname:'Schaap'})
});
app.listen(port);