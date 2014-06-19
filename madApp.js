app = angular.module('madApp', []);
app.controller('MyCtrl', function($scope){
	// Sets the story_toggle to false so it doesn't show up by default
	$scope.story_toggle = false;

	$scope.show = function() {
		// Make sure to set the variable!
		$scope.story_toggle = !$scope.story_toggle; 
	}
	
	console.log("test ", $scope.female_name);
});