angular.module('homePageController.module',[]).controller('homePageController', function($scope,$location){
	$scope.punch=function(){
		$location.url("/punch_form");

	};
}); 