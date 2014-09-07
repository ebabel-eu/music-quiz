module.exports = function (app, options) {

	var kitten;
	var account;

	options.handleError = function (err, req, res, msg) {
		res.send({
			error: err,
			url: req.url,
			method: req.method,
			msg: msg
		});
	}

    kitten = require('./kitten/kittenController.js')(app, options);
    account = require('./account/accountController.js')(app, options);
}