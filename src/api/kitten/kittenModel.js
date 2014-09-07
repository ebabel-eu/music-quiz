// Setup the mongoose Schema.
var kittenSchema = function () {
	var Schema = require("mongoose").Schema;

	return new Schema({
        name: {
            type: String,
            index: true
        },
        dateOfBirth: Date
	});
}

// Expose the model.
module.exports = function (db) {
	return db.model('kitten', kittenSchema());
};