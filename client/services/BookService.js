angular.module('bookstore')
  .factory('BookService', function($http) {
    return {
      getBooks: function() {
        return $http.get('api/books')
      },
      getBook: function(id) {
        return $http.get('api/books/' + id)
      },
      addBook: function (bookData) {
        return $http.post('/api/books/', bookData)
      },
      editBook: function(id, bookData) {
        return $http.put('/api/books/' + id, bookData)
      },
      deleteBook: function(id, bookData){
          return $http.delete('/api/books/' + id, bookData);
      }
    };
  });