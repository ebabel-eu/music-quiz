// Setup the mongoose Schema.
var kittenSchema = function () {
	var Schema = require("mongoose").Schema;

	return new Schema({
        name: {
            type: String,
            index: true,
            unique: true
        },
        dateOfBirth: Date,
        createAt: Date,
        updateAt: Date
	});
}

// Expose the model.
module.exports = function (db) {
	return db.model('kitten', kittenSchema());
};