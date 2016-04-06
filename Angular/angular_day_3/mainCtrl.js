angular.module('lecture')
.controller('mainCtrl', ['$scope', 'mainSrvc', function($scope) {

  $scope.names = [];

  $scope.addUser = function() {
    $scope.names.push(buildRebel());
  }

  $scope.addRebel = function() {
    if($scope.rating >= 50) {
        $scope.names.push()
      }
    }
  }

  function buildRebel() {
    return{
      name: $scope.first_name,
      planet: $scope.planet,
      rating: $scope.rating
    }
  }


  function clearInputField() {
    $scope.artist = "";
    $scope.genre = "";
    $scope.rating = "";
  }




}]);
