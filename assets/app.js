(function() {

	var app = angular.module('sunsetApp',[]);

	app.controller('timeController', function($scope, $http){
		// Getting the data from the API
		var url = "https://api.sunrise-sunset.org/json?lat=55.400&lng=10.401&date=today&formatted=0";

		$http.get(url).then(function(response) {
		      $scope.dataset = response.data;
		});

	});

})();