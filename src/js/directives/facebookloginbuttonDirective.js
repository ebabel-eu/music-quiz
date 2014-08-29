musicQuizApp.directive('mqFacebookloginbutton', 

	function() {

		return {
			restrict: 'E',
			template: '<p ng-show="login.showLogin" class="text-center login-button">' +
                         '<a href="/#login" class="btn btn-primary btn-lg btn-block">Login with Facebook</a>' +
                      '</p>',
			replace: true
		};
	}

);