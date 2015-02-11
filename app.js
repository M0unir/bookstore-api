var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Models
Genre = require('./models/genre');

// Connecting to mongoose
mongoose.connect('mongodb://localhost/booklibrary');
var db = mongoose.connection;

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/about', function (req, res) {
  res.send('<h1>About page</h1>');

});

app.get('/contact', function (req, res) {
  res.send('Contact Page');
});

// Book API
app.get('/api/genres', function(req,res){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres);
    })
})

app.listen(3000);
console.log('Running on port 3000..');