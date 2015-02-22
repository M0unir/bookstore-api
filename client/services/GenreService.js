angular.module('bookstore')
  .factory('GenreService', function($http) {
    return {
      getGenres: function() {
        return $http.get('api/genres')
      },
      getGenre: function(id) {
        return $http.get('api/genres/' + id)
      },
      addGenre: function (genreData) {
        return $http.post('/api/genres/', genreData)
      },
      editGenre: function(id, genreData) {
        return $http.put('/api/genres/' + id, genreData)
      },
      deleteGenre: function(id, genreData){
          return $http.delete('/api/genres/' + id, bookData);
      }
    };
  });