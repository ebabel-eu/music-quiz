// Handle messages sent to the gamer.
musicQuizApp.service('notificationsService', function () {
    'use strict';

    // Remove a notification from its index or the whole object and return an array of what has been removed.
    this.remove = function (notification) {
        return this.collection.splice(notification, 1);
    };

    // Add a single notification.
    this.add = function (notification) {
        return this.collection.push(notification);
    }

    // Add an array of notifications.
    this.addRange = function (notifications) {
        return this.collection.push.apply(this.collection, notifications);
    }

    // Static collection of notifications.
    this.collection = [];
});