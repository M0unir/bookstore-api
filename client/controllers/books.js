var bookstore = angular.module('bookstore');

bookstore.controller('BooksController', function ($scope, $http, $location, $routeParams, BookService) {
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

  // // GET ALL
  // $scope.getBooks = function () {
  //   $http.get('api/books').success(function (response) {
  //     $scope.books = response;
  //   });
  // }

  // // GET
  // $scope.getBook = function () {
  //   var id = $routeParams.id;
  //   $http.get('/api/books/' + id).success(function (response) {
  //     $scope.book = response;
  //   });
  // }

  // // POST
  // $scope.addBook = function () {
  //   $http.post('/api/books/', $scope.book).success(function (response) {
  //     window.location.href = '#/books'
  //   });
  // }

  // // UPDATE
  // $scope.editBook = function () {
  //   var id = $routeParams.id;
  //   $http.put('/api/books/' + id, $scope.book).success(function (response) {
  //     window.location.href = '#/books'
  //   });
  // }

  // // DELETE
  // $scope.deleteBook = function () {
  //   var id = $routeParams.id;
  //   $http.delete('/api/books/' + id, $scope.book).success(function (response) {
  //     window.location.href = '#/books'
  //   });
  // }

});
