musicQuizApp.directive('mqOffline', 

	function() {

		return {
			restrict: 'E',
			template: 	
					'<div ng-show="!online">' +
				        '<div class="panel panel-danger">' +
				            '<div class="panel-heading">' +
				                'You are offline' +
				            '</div>' +
				            '<div class="panel-body">' +
				                '<p>' +
				                    'To play this game, please <strong>connect</strong> to the <strong>Internet</strong>.' +
				                '</p>' +
				                '<a href="/" class="btn btn-danger btn-md" target="_top">Try again</a>' +
				            '</div>' +
				        '</div>' +
				    '</div>',
			replace: true
		};
	}

);