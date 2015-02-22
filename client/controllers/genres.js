var bookstore = angular.module('bookstore');

bookstore.controller('GenresController', function ($scope, $http, $location, $routeParams, GenreService) {

      $scope.getGenres = function () {
        GenreService.getGenres()
          .then(function (response) {
            console.log(response);
            $scope.genres = response.data;
          })
          .catch(function (response) {
            console.log(response.data.message, response.status);
          });
      };

      $scope.getGenre = function () {
        var id = $routeParams.id;
        GenreService.getGenre(id)
          .then(function (response) {
            $scope.genre = response.data;
          })
          .catch(function (response) {
            console.log(response.data.message, response.status);
          });
      };

      $scope.addGenre = function () {
        var id = $routeParams.id;
        GenreService.addGenre($scope.genre)
          .then(function (response) {
            $scope.genre = response.data;
            window.location.href = '#/genres'
          })
          .catch(function (response) {
            console.log(response.data.message, response.status);
          });
      };


      $scope.editGenre = function () {
        var id = $routeParams.id;
        GenreService.editGenre(id, $scope.genre)
          .then(function (response) {
            $scope.genre = response.data;
            window.location.href = '#/genres'
          })
          .catch(function (response) {
            console.log(response.data.message, response.status);
          });
      };

      $scope.deleteGenre = function () {
        var id = $routeParams.id;
        GenreService.deleteGenre(id, $scope.genre)
          .then(function (response) {
            $scope.genre = response.data;
            window.location.href = '#/genres'
          })
          .catch(function (response) {
            console.log(response.data.message, response.status);
          });
      };



      //   // GET ALL
      // $scope.getGenres = function(){
      //     $http.get('api/genres').success(function(response){
      //         $scope.genres = response;
      //     })
      // }

      //   // GET
      //   $scope.getGenre = function () {
      //     var id = $routeParams.id;
      //     $http.get('/api/genres/' + id).success(function (response) {
      //       $scope.genre = response;
      //     });
      //   }

      //   // POST
      //   $scope.addGenre = function () {
      //     console.log($scope.genre);
      //     $http.post('/api/genres/', $scope.genre).success(function (response) {
      //       window.location.href = '#/genres';
      //     });
      //   }

      //   // UPDATE
      //   $scope.editGenre = function () {
      //     var id = $routeParams.id;
      //     console.log($scope.genre);
      //     $http.put('/api/genres/' + id, $scope.genre).success(function (response) {
      //       window.location.href = '#/genres/details/'+ id
      //     });
      //   }

      //   // DELETE
      //   $scope.deleteGenre = function () {
      //     var id = $routeParams.id;
      //     console.log($scope.genre);
      //     $http.delete('/api/genres/' + id, $scope.genre).success(function (response) {
      //       window.location.href = '#/genres'
      //     });
      //   }

      })
