let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();

module.exports = function (app) {
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
};