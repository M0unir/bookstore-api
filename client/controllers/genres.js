var bookstore = angular.module('bookstore');

//ng-annotate before minify
bookstore.controller('GenresController', [function($scope, $http, $location, $routeParams){
console.log('GenresController loaded... ');
$scope.getGenres = function(){
    $http.get('api/books').success(function(response){
        $scope.genres = response;
    })
}

}])