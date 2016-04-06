angular.module("httpApp").service('svc', function() {

    this.count = function(array) {
      return array.length;
    }

});
