// Setup the mongoose Schema.
var accountSchema = function () {
    var Schema = require("mongoose").Schema;

    return new Schema({
        // Paths supplied by the Facebook Graph API.
        id: {
            type: Number,
            index: true,
            unique: true,
            required: true,
            dropDups: true
        },
        name: String,
        first_name: String,
        last_name: String,
        email: {
            type: String,
            index: true,
            unique: true,
            required: true,
            dropDups: true
        },
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

        // Paths supplied by musicQuizApp.
        createdAt: Date,
        updatedAt: Date
    });
}

// Expose the model.
module.exports = function (db) {
    return db.model('account', accountSchema());
};