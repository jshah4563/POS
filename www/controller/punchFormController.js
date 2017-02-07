angular.module('punchFormController.module',[]).controller('punchFormController', function($scope,$location,$http){
	$scope.punch_func=function(){
		var obj = {};
	        obj['id'] = $scope.punch_id;
	        obj['pin'] = $scope.punch_pin;
	        console.log(obj);
		$http.post("http://techtechnics.com/Dashboard/punch.php",obj)
    	   .then(function(data,status,headers,config){
            console.log("Status is : " + data.status);
            $scope.msg=data.data;
        }, function(response) {
          $scope.data = response.data || 'Request failed';
         // $scope.status = response.status;
          $scope.msg  = "There is some error";
          console.log($scope.data);
          console.log("here");
          console.log($scope.status);
      });
	}
}); 