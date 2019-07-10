let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

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
   res.render('person',{ID: req.params.id})
});

app.get('/api',function (req,res) {
    res.json({firstname: 'Noella', lastname:'Schaap'})
});
app.listen(port);