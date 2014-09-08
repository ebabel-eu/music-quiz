// Interface with the account RESTful API endpoint as an Angular $resource.
musicQuizApp.factory('accountFactory', ['$resource', 

	function ($resource) {
		'use strict';

		// todo: use this accountFactory in the accountService to make calls.

		return $resource('/api/1.0.0/account/:id', {id: '@id'});

		// todo: write unit tests based on O'Reily book to check this REST resource. See chapter 5.
	}
]);