var mongoose = require('mongoose');

// Genre Schema
var genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

// GET genres 
module.exports.getGenres = function(callback, limit ){
    Genre.find(callback).limit(limit);
}

// GET genre 
module.exports.getGenre = function(id, callback){
    Genre.findById(id, callback);
}

// POST genre
module.exports.addGenre = function(genre, callback ){
    Genre.create(genre, callback);
}

// UPDATE genre
module.exports.updateGenre = function(id, genre, options, callback ){
    var query = {_id:id};
    var update = {
        name: genre.name
    }
    Genre.findOneAndUpdate(query, update, options, callback);
}

// DELETE genre
module.exports.deleteGenre = function(id, callback){
    var query = {_id: id};
    Genre.remove(query, callback);
}
