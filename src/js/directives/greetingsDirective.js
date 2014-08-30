musicQuizApp.directive('mqGreetings', 

	function() {

		return {
			restrict: 	'E',
			replace: 	true,
			scope: 		{ 
							greeting: '=greeting',
							togreet: '=togreet'
						},
			template: 	'<span>{{greeting}} {{togreet.first_name || togreet.name}}.</span>'
		};
	}

);