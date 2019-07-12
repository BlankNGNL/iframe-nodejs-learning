const express = require('express');
let app = express();
const apiController = require('./controllers/apiController');


let port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));  //Middleware(uploads/downloads)

app.set('view engine','ejs');

app.get('/',function (req,res) {
    res.render('index')
});

apiController(app);
app.listen(port);