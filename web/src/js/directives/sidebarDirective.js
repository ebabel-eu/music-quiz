musicQuizApp.directive('mqSidebar', 

	function() {

		return {
			restrict: 'E',
			templateUrl: 'views/sidebar.html',
			replace: true
		};
	}

);