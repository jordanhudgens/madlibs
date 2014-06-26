angular.module('madApp', [])

	//add a controller to hold a model w/words for madlib
	.controller('MyCtrl', function($scope) {

		//initialize 
		$scope.generatedLib = false;
		$scope.submitted = false;

		$scope.submit = function() {
			if($scope.madLibForm.$valid) {
				console.log('The form is valid');
				$scope.generatedLib = true;
			} else {
				console.log('The form is invalid');
				$scope.generatedLib = false;
			}
		};

		//reset form
		$scope.reset = function() {

			$scope.madLibForm.$setPristine();

			$scope.data.maleName = "";
			$scope.data.cityName ="";
			$scope.data.foodType = "";
			$scope.data.adjective = "";

			$scope.data.strangeLocation = "";
			$scope.data.fictionalCharacter = "";
			$scope.data.number = "";
			$scope.data.color = "";

			$scope.submitted = false;
			$scope.generatedLib = false;
		}
	});