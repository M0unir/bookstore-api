var bookstore = angular.module('bookstore');


bookstore.controller('BooksController', function ($scope, $http, $location, $routeParams) {
  console.log('BooksController loaded... ');
  $scope.getBooks = function () {
    $http.get('api/books').success(function (response) {
      $scope.books = response;
    });
  }

  $scope.getBook = function () {
    var id = $routeParams.id;
    $http.get('/api/books/' + id).success(function (response) {
      $scope.book = response;
    });
  }

  $scope.addBook = function () {
    console.log($scope.book);
    $http.post('/api/books/', $scope.book).success(function (response) {
      window.location.href = '#/books'
    });
  }

    // UPDATE
    $scope.editBook = function () {
    var id = $routeParams.id;
    console.log($scope.book);
    $http.put('/api/books/'+id, $scope.book).success(function (response) {
      window.location.href = '#/books'
    });
  }

    // DELETE
    $scope.deleteBook = function () {
    var id = $routeParams.id;
    console.log($scope.book);
    $http.delete('/api/books/'+id, $scope.book).success(function (response) {
      window.location.href = '#/books'
    });
  }

});
