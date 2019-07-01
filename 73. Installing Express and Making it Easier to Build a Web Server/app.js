let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.get('/',function (req,res) {
    res.send('<html><head><body><h1>Hello World!</h1></body></head></html>')
});

app.get('/api',function (req,res) {
    res.json({firstname: 'Noella', lastname:'Schaap'})
});
app.listen(port);