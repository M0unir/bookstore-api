var bookstore = angular.module('bookstore', ['ngRoute']);

bookstore.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'BooksController',
      templateUrl: 'views/books/books.html'
    })
    .when('/books', {
      controller: 'BooksController',
      templateUrl: 'views/books/books.html'
    })
    .when('/books/details/:id', {
      controller: 'BooksController',
      templateUrl: 'views/books/book_details.html'
    })
    .when('/books/add', {
      controller: 'BooksController',
      templateUrl: 'views/books/add_book.html'
    })
    .when('/books/edit/:id', {
      controller: 'BooksController',
      templateUrl: 'views/books/edit_book.html'
    })

    //Genres

    .when('/genres', {
      controller: 'GenresController',
      templateUrl: 'views/genres/genres.html'
    })
    .when('/genres/add', {
      controller: 'GenresController',
      templateUrl: 'views/genres/add_genre.html'
    })
    .otherwise({
      redirectTo: '/'
    })
})
