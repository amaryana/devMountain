angular.module ('app', []);

angular.module('app')
  .controller('products', function($scope) {
         $scope.users = [
           {
             name: "Aladdin",
             movie: "'Aladdin'",
             species: "human"
           },
           {
             name: "Buzz Lightyear",
             movie: "'Toy Story'",
             species: "toy"
           },
           {
             name: "Simba",
             movie: "'Lion King'",
             species: "lion"
           },
           {
             name: "Mowgli",
             movie: "'Jungle Book'",
             species: "man cub"
           }
         ];

});
