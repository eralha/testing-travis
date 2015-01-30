define(['ng/app'], function(app)
{
	app.controller('HomeViewController', ['$scope', function($scope){
        $scope.page =
        {
            heading: 'Welcome'
        };

        $scope.getPageHeading = function(){
        	return $scope.page.heading;
        }
    }]);
});