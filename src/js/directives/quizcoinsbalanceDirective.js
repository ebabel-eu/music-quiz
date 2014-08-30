musicQuizApp.directive('mqQuizcoinsbalance', 

	function() {

		return {
			restrict: 	'E',
			replace: 	true,
			transclude: true, 
			scope: 		{ quizCoins: '=balance' },
			template: 	'<a href="/#quiz-coins-account" class="label" ' +
		                        'ng-class="{' +
		                            '\'label-info\': quizCoins.balance >= quizCoins.danger, ' +
		                            '\'label-danger\': quizCoins.balance < quizCoins.danger' +
		                        '}">{{quizCoins.balance | number:0}} Quiz Coins</a>',
		};
	}

);