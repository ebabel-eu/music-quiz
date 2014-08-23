describe('Service notificationsService', function() {
    'use strict';

    beforeEach(angular.mock.module('musicQuizApp'));

    it('has a property collection which is an empty array', 
        angular.mock.inject(function (notificationsService) {
            expect(notificationsService.collection).toEqual([]);
        }));

    it('can add a notification to its collection', 
        angular.mock.inject(function (notificationsService) {
            var notification = {
                "type": "warning",
                "title": "Login doesn't fully work",
                "message": "We are currently experiencing issues with your login. Please bear with us."
            };

            // Add a notification.
            notificationsService.add(notification);
            expect(notificationsService.collection.length).toBe(1);
        }));

    it('can add then remove a notification by object from its collection',
        angular.mock.inject(function (notificationsService) {
            var notification = {
                "type": "success",
                "title": "You won 3 Quiz Coins",
                "message": "Correct! You answered this question correctly and won 3 Quiz Coins."
            };

            // Add a notification.
            notificationsService.add(notification);
            expect(notificationsService.collection.length).toBe(1);

            // Remove that notification with the whole object.
            notificationsService.remove(notification);
            expect(notificationsService.collection).toEqual([]);
        }));

    it('can add then remove a notification by index from its collection',
        angular.mock.inject(function (notificationsService) {
            var notification = {
                "type": "success",
                "title": "You won 3 Quiz Coins",
                "message": "Correct! You answered this question correctly and won 3 Quiz Coins."
            };

            // Add a notification.
            notificationsService.add(notification);
            expect(notificationsService.collection.length).toBe(1);

            // Remove that notification with the whole object.
            notificationsService.remove(0);
            expect(notificationsService.collection).toEqual([]);
        }));

    it('can add a range of 2 notifications',
        angular.mock.inject(function (notificationsService) {
            var notifications = [
                {
                    "type": "success",
                    "title": "You won 3 Quiz Coins",
                    "message": "Correct! You answered this question correctly and won 3 Quiz Coins."
                },
                {
                    "type": "warning",
                    "title": "Login doesn't fully work",
                    "message": "We are currently experiencing issues with your login. Please bear with us."
                }];

            // Add array of 2 notifications.
            notificationsService.addRange(notifications);
            expect(notificationsService.collection.length).toBe(2);
        }));

    it('can add a range of 2 notifications, remove one by index, confirm what was removed and what is left',
        angular.mock.inject(function (notificationsService) {
            var removed,
                notifications = [
                {
                    "type": "success",
                    "title": "You won 3 Quiz Coins",
                    "message": "Correct! You answered this question correctly and won 3 Quiz Coins."
                },
                {
                    "type": "warning",
                    "title": "Login doesn't fully work",
                    "message": "We are currently experiencing issues with your login. Please bear with us."
                }];

            // Add array of 2 notifications.
            notificationsService.addRange(notifications);
            expect(notificationsService.collection.length).toBe(2);

            // Remove the second notification (index 1).
            removed = notificationsService.remove(1);
            expect(removed[0]).toBe(notifications[1]);

            // Check the notification that hasn't been removed (index 0).
            expect(notificationsService.collection.length).toBe(1);
            expect(notificationsService.collection[0]).toBe(notifications[0]);
        }));

    it('can add a range of 2 notifications, remove one by object, confirm what was removed and what is left',
        angular.mock.inject(function (notificationsService) {
            var removed,
                notifications = [
                {
                    "type": "success",
                    "title": "You won 3 Quiz Coins",
                    "message": "Correct! You answered this question correctly and won 3 Quiz Coins."
                },
                {
                    "type": "warning",
                    "title": "Login doesn't fully work",
                    "message": "We are currently experiencing issues with your login. Please bear with us."
                }];

            // Add array of 2 notifications.
            notificationsService.addRange(notifications);
            expect(notificationsService.collection.length).toBe(2);

            // Remove the first notification.
            removed = notificationsService.remove(notifications[0]);
            expect(removed[0]).toBe(notifications[0]);

            // Check the notification that hasn't been removed (second one that was added).
            expect(notificationsService.collection.length).toBe(1);
            expect(notificationsService.collection[0]).toBe(notifications[1]);
        }));

});