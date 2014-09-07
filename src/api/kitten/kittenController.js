module.exports = function (app, options) {

    var mongoose = options.mongoose,
        Schema = options.mongoose.Schema,
        db = options.db,
        kittenModel = require('./kittenModel')(db);

    app.get('/api/1.0.0/kitten', function (req, res) {
        var qSkip = req.query.skip,
            qTake = req.query.take,
            qSort = req.query.sort,
            qFilter = req.query.filter;

        kittenModel.find()
            .sort(qSort)
            .skip(qSkip)
            .limit(qTake)
            .exec(function (err, kitten) {
                if (err) return handleError(err);
                res.send(kitten);
            });
    });

    app.post('/api/1.0.0/kitten', function (req, res) {
        var kitten = new kittenModel(req.body);

        kitten.save(function (err) {
            if (err) return handleError(err);
            // todo: add extra test to check if record exists, to avoid duplicates. Call handleError if needed.
            res.send(kitten);
        });
    });

    app.get('/api/1.0.0/kitten/:id', function (req, res) {
        return 
            kittenModel.findById(req.params.id, function (err, kitten) {
                // todo: implement error response.
            });
    });

    app.put('/api/1.0.0/kitten/:id', function (req, res) {
        return 
            kittenModel.findById(req.params.id, function (err, kitten) {
                // todo: implement error response.
            });
    });

    app.delete('/api/1.0.0/kitten/:id', function (req, res) {
        return 
            kittenModel.findById(req.params.id, function (err, kitten) {
                return kitten.remove(function (err) {
                    // todo: implement error response.
                });
            });
    });
};