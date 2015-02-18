var bookstore = angular.module('bookstore');


bookstore.controller('BooksController', function ($scope, $http, $location, $routeParams) {
    console.log('BooksController loaded... ');
    $scope.getBooks = function(){
        $http.get('api/books').success(function(response){
            $scope.books = response;
        })
    }

});
