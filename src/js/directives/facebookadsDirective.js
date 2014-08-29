musicQuizApp.directive('mqFacebookads', 

	function() {

		return {
			restrict: 'E',
			template: 	
					'<div class="panel panel-default">' +
			            '<div class="panel-heading">' +
			                '<span class="glyphicon glyphicon-globe"></span>' +
			                'Ads'+
			            '</div>' +
			            '<div class="panel-body">' +
			                'advertising space' +
			            '</div>' +
			        '</div>',
			replace: true
		};
	}

);