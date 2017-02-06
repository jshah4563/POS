angular.module('router.module',[]).config(function ($routeProvider) {
	$routeProvider
		
		// We are going to define routes,
		// controllers and templates associated
		// with these routes.
		// You can change these but make sure
		// you know what you are doing
		//

		// main route
		//
		.when('/',
		{
			controller: 'homePageController',
			templateUrl: 'views/homePage.html'
		})
		.when('/punch_form',
		{
			controller: 'punchFormController',
			templateUrl: 'views/punchFormPage.html'
		})
		// if non of the above routes
		// are matched we are setting router
		// to redirect to the RootController
		.otherwise({ redirectTo: '/'});

})

.config(function ($httpProvider){
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
