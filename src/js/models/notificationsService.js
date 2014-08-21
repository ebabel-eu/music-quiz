musicQuizApp.service('notificationsService', function () {
    'use strict';

    this.remove = function (index) {
        this.collection.splice(index, 1);
    };

    this.collection = [];
});