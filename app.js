var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// console.log(path);
// console.log(path.join(__dirname, '/client'));
app.use(express.static( path.join(__dirname, 'client') ));
app.use(bodyParser.json());

// Models
Genre = require('./models/genre');
Book = require('./models/book');

// Connecting to mongoose
mongoose.connect('mongodb://localhost/booklibrary');
var db = mongoose.connection;

// app.get('/', function (req, res) {
//   res.send('Hello World');
// });

// app.get('/about', function (req, res) {
//   res.send('<h1>About page</h1>');
// });

app.get('/contact', function (req, res) {
  res.send('Contact Page');
});

// BOOKSTORE API
// GET genres
app.get('/api/genres', function(req,res){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

// GET a single genre
app.get('/api/genres/:_id', function(req,res){
    Genre.getGenre(req.params._id, function( err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

// POST genre
app.post('/api/genres', function(req,res){
    var genre = req.body;
    Genre.addGenre(genre, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

// UPDATE genre
app.put('/api/genres/:_id', function(req,res){
    var id = req.params._id
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

// DELETE genre
app.delete('/api/genres/:_id', function(req,res){
    var id = req.params._id
    Genre.deleteGenre(id, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

// GET books
app.get('/api/books', function(req,res){
    Book.getBooks(function(err, books){
        if(err){
            throw err;
        }
        res.json(books);
    });
});

// GET a single book
app.get('/api/books/:_id', function(req,res){
    Book.getBookById(req.params._id, function( err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

// POST book
app.post('/api/books', function(req, res){
	var book = req.body;
	Book.addBook(book, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});


// UPDATE book
app.put('/api/books/:_id', function(req,res){
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id, book, {}, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

// DELETE genre
app.delete('/api/books/:_id', function(req,res){
    var id = req.params._id
    Book.removeBook(id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.listen(3000);
console.log('Running on port 3000..');
