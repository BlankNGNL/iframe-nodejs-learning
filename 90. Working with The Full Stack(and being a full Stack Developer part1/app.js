const express = require('express');
let app = express();
const apiController = require('./controllers/apiController');


let port = process.env.PORT || 3000;

let people =  [
    {
        name:'Mike Yan'
    },
    {
        name:'Noella Schaap'
    },
    {
        name:'Sierle Toonen'
    }
];

app.use('/assets', express.static(__dirname + '/public'));  //Middleware(uploads/downloads)

app.set('view engine','ejs');

app.get('/',function (req,res) {
    res.render('index',{serverPeople: people})
});

apiController(app);
app.listen(port);