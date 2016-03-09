/* Sample Controller */
app.controller('movielist', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('./data/imdb250.json').success(function(data) {
      $scope.movies = data;
    }).error(function(err) {

    });
    $scope.query = "";
    $scope.predicate = "title";
    $scope.order = "ascending";
    $scope.reverseSort = false;
    $scope.setOrder = function(newOrder) {
      $scope.order = newOrder;
      $scope.reverseSort = ($scope.order === "descending");
    }
}]);
app.controller('moviedetails', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('./data/imdb250.json').success(function(data) {
      for(var i = 0; i < data.length; i++) {
        if(data[i] && data[i].imdbID === $routeParams.id) {
          $scope.movie = data[i];
          $scope.prev = data[(i + data.length - 1) % data.length].imdbID;
          $scope.next = data[(i + 1) % data.length].imdbID;
          break;
        }
      }
    }).error(function(err) {

    });
}]);
app.controller('moviegallery', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.genres = ["All", "Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Drama", "Family", "Fantasy", "Film-Noir", "History", "Horror", "Music", "Musical", "Mystery", "Romance", "Sci-Fi", "Sport", "Thriller", "War", "Western"];
    $scope.selectedGenre = "All";
    $http.get('./data/imdb250.json').success(function(data) {
      if($routeParams.genre && $routeParams.genre !== "All") {
        $scope.movies = []; 
        for(var i = 0; i < data.length; i++) {
          if(data[i] && data[i].genre.indexOf($routeParams.genre) > -1) {
            $scope.movies.push(data[i]);
          }
        }
      } else {
        $scope.movies = data;
      }
    }).error(function(err) {

    });
    $scope.filterGenre = function(movie) {
      if($scope.selectedGenre && $scope.selectedGenre !== "All" && movie.genre.indexOf($scope.selectedGenre) == -1)
        return false;
      return true;
    }
    $scope.refreshList = function() {
      $scope.$apply();
    }
}]);
