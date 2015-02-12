var mongoose = require('mongoose');

// Genre Schema
var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
    },
    pages: {
        type: String,
        required: false
    },
    image_url: {
        type: String,
    },
    buy_url: {
        type: String,
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// GET books 
module.exports.getBooks = function(callback, limit ){
    Book.find(callback).limit(limit);
}

// GET book
module.exports.getBookById = function(id, callback){
    Book.findById(id, callback);
}

// POST book
module.exports.addBook = function(book, callback ){
    Book.create(book, callback);
}

// UPDATE book
module.exports.updateBook = function(id, book, options, callback ){
    var query = { _id: id };
    var update = {
        name: book.title,
        genre: book.genre,
        book: book.book,
        description: book.description, 
        author: book.author, 
        publisher: book.publisher, 
        pages: book.pages, 
        image_url: book.image_url,
        buy_url: book.buy_url
    }
    Book.findOneAndUpdate(query, update, options, callback);
}

// DELETE book
module.exports.removeBook = function(id, callback){
    query = {_id: id};
    Book.remove(query, callback);
}