require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true } ).catch(function (err){
    console.log(err);
    process.exit(1);
});

let Schema = mongoose.Schema;

let personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

let Person = mongoose.model('Person', personSchema);

let mike = Person({
    firstname: 'mike',
    lastname: 'Yan',
    address: '555 Main St.'
});

// save the user
mike.save(function(err) {
    if (err) throw err;

    console.log('person saved!');
});

let noella = Person({
    firstname: 'noella',
    lastname: 'schaap',
    address: '555 Main St.'
});

// save the user
noella.save(function(err) {
    if (err) throw err;

    console.log('person saved!');
});

let apiController = require('./controllers/apiController');
let htmlController = require('./controllers/htmlController');

let port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));  //Middleware(uploads/downloads)

app.set('view engine','ejs');

app.use('/', function (req,res,next) {
    console.log('Request Url:' + req.url);

    // get all the users
    Person.find({}, function(err, users) {
        if (err) throw err;

        // object of all the users
        console.log(users);
    });

    next();
});

apiController(app);
htmlController(app);

app.listen(port);