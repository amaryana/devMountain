angular.module('httpApp').controller("controller", function($scope, svc){

  $scope.test = "Working like a boss";

  $scope.count = svc.count([1,2,3,5,7]);

});
