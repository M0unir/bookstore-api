var bookstore = angular.module('bookstore');

bookstore.controller('BooksController', function ($scope, $http, $location, $routeParams, BookService) {
  
  $scope.filters = {};

  $scope.getBooks = function () {
    BookService.getBooks()
      .then(function (response) {
        console.log(response);
        $scope.books = response.data;
      })
      .catch(function (response) {
        console.log(response.data.message, response.status);
      });
  };

  $scope.getBook = function () {
    var id = $routeParams.id;
    BookService.getBook(id)
      .then(function (response) {
        $scope.book = response.data;
      })
      .catch(function (response) {
        console.log(response.data.message, response.status);
      });
  };

    $scope.addBook = function () {
    var id = $routeParams.id;
    BookService.addBook($scope.book)
      .then(function (response) {
        $scope.book = response.data;
        window.location.href = '#/books'
      })
      .catch(function (response) {
        console.log(response.data.message, response.status);
      });
  };


    $scope.editBook = function () {
    var id = $routeParams.id;
    BookService.editBook(id, $scope.book)
      .then(function (response) {
        $scope.book = response.data;
        window.location.href = '#/books'
      })
      .catch(function (response) {
        console.log(response.data.message, response.status);
      });
  };

    $scope.deleteBook = function () {
    var id = $routeParams.id;
    BookService.deleteBook(id, $scope.book)
      .then(function (response) {
        $scope.book = response.data;
        window.location.href = '#/books'
      })
      .catch(function (response) {
        console.log(response.data.message, response.status);
      });
  };

});
