angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/search', {
			templateUrl: 'views/search.html',
			controller: 'SearchController'
		})

		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'	
		});

	$locationProvider.html5Mode(true);

}]);