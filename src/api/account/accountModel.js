// Setup the mongoose Schema.
var accountSchema = function () {
    var Schema = require("mongoose").Schema;

    return new Schema({
        id: Number,
        name: String,
        first_name: String,
        last_name: String,
        picture: {
            data: {
                is_silhouette: Boolean,
                url: String
            }
        },
        link: String,
        gender: String,
        locale: String,
        age_range: {
            max: Number,
            min: Number
        },
        createdAt: Date,
        updatedAt: Date
    });
}

// Expose the model.
module.exports = function (db) {
    return db.model('account', accountSchema());
};