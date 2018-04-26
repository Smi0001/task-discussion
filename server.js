var express = require('express');
var app = express();
var path = require('path');
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// app.set('views', path.join(__dirname, 'views'));
// **// Set EJS View Engine**
// app.set('view engine','ejs');
// **// Set HTML engine**
// app.engine('html', require('ejs').renderFile);

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/dist'));

// set the home page route
app.get('/', function(req, res) {
 res.sendFile(path.join(__dirname + '/dist/index.html'));
    // ejs render automatically looks in the views folder
    //res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
