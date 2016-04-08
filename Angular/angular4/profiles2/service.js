angular.module('userProfiles') //wow

.service('mainService', function($http, $q) {

	  this.getUsers = function() {
			var deferred = $q.defer();
			//console.log(deferred);
	    $http({
	      method: 'GET',
	      url: 'http://reqres.in/api/users?page=1'
			}).then(function(response) {
					var parsedResponse = response.data.data
					for(var i = 0; i < parsedResponse.length; i++) {
	        	parsedResponse[i].first_name = 'Ralf'
	      	}
					deferred.resolve(parsedResponse)
	    	})

				//console.log(deferred);
			  return deferred.promise;
	  }
	});
