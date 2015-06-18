musicQuizApp.directive('mqGreetings', 

	function() {

		return {
			restrict: 	'E',
			replace: 	true,
			scope: 		{ 
							greeting: '=greeting',
							togreet: '=togreet'
						},
			template: 	'<span>{{greeting}} {{togreet}}.</span>'
		};
	}

);