var bookstore = angular.module('bookstore');

//ng-annotate before minify
bookstore.controller('GenresController', function($scope, $http, $location, $routeParams){
console.log('GenresController loaded... ');

  // GET ALL
$scope.getGenres = function(){
    $http.get('api/genres').success(function(response){
        $scope.genres = response;
    })
}

  // GET
  $scope.getGenre = function () {
    var id = $routeParams.id;
    $http.get('/api/genres/' + id).success(function (response) {
      $scope.genre = response;
    });
  }

  // POST
  $scope.addGenre = function () {
    console.log($scope.genre);
    $http.post('/api/genres/', $scope.genre).success(function (response) {
      window.location.href = '#/genres'
    });
  }

//   // UPDATE
//   $scope.editBook = function () {
//     var id = $routeParams.id;
//     console.log($scope.book);
//     $http.put('/api/books/' + id, $scope.book).success(function (response) {
//       window.location.href = '#/books'
//     });
//   }

//   // DELETE
//   $scope.deleteBook = function () {
//     var id = $routeParams.id;
//     console.log($scope.book);
//     $http.delete('/api/books/' + id, $scope.book).success(function (response) {
//       window.location.href = '#/books'
//     });
//   }

})