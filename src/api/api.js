module.exports = function (app, options) {

	var kitten;

	options.handleError = function (err, res) {
		res.send(err);
	}

    kitten = require('./kitten/kittenController.js')(app, options);
}