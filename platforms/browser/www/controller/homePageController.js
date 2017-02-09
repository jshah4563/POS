angular.module('homePageController.module',[]).controller('homePageController', function($scope,$location){
	$scope.punch_in=function(){
		$location.url("/punch_form");

	};
}); 