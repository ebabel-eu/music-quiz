module.exports = function (app, options) {

    var mongoose = options.mongoose,
        Schema = options.mongoose.Schema,
        db = options.db,
        kittenModel = require('./kittenModel')(db);

    // Get a list of all kitten records.
    app.get('/api/1.0.0/kitten', function (req, res) {
        // Mongoose querying via querystring. 
        // Ex: append ?limit=2 or ?filter={"name": "Ido"}
        var qSkip = req.query.skip,
            qLimit = req.query.limit,
            qSort = req.query.sort,
            qFilter = req.query.filter ? JSON.parse(req.query.filter) : {};

        kittenModel.find(qFilter)
            .sort(qSort)
            .skip(qSkip)
            .limit(qLimit)
            .exec(function (err, kitten) {
                if (err) return options.handleError(err, req, res, 'Could not list the records.');
                
                res.send({
                    records: kitten.length,
                    kitten: kitten
                });
            });
    });

    // Create a new kitten.
    app.post('/api/1.0.0/kitten', function (req, res) {
        var kitten = new kittenModel(req.body);

        kitten.createAt = Date.now();

        kitten.save(function (err) {
            if (err) return options.handleError(err, req, res, 'Could not create the record.');
            
            res.send({
                created: true,
                kitten: kitten
            });
        });
    });

    // Get a single kitten by its unique id.
    app.get('/api/1.0.0/kitten/:id', function (req, res) {
        kittenModel.findById(req.params.id, function (err, kitten) {
            if (err) return options.handleError(err, req, res, 'Could not find the record.');
            
            res.send({
                found: kitten !== null,
                kitten: kitten
            });
        });
    });

    // Find a single kitten by its unique id and update its record.
    app.put('/api/1.0.0/kitten/:id', function (req, res) {
        kittenModel.findById(req.params.id, function (err, kitten) {
            if (err) return options.handleError(err, req, res, 'Could not find the record to update.');

            var updated = req.body;
            updated.updateAt = Date.now();
            updated.__v = kitten.__v + 1;

            kitten.update(
                updated,
                {
                    safe: true,
                    upsert: false,
                    multi: false,
                    overwrite: false
                },
                function (err, numberAffected, raw) {
                    if (err) return options.handleError(err, req, res, 'Could not update the record.');

                    res.send({
                        numberAffected: numberAffected,
                        raw: raw,
                        previous: kitten,
                        updated: req.body
                    });
                }
            );
        });
    });

    // Delete a single kitten record by its unique id.
    app.delete('/api/1.0.0/kitten/:id', function (req, res) {
        kittenModel.findByIdAndRemove(req.params.id, function (err, kitten) {
            if (err) return options.handleError(err, req, res, 'Could not delete the record.');

            res.send({
                deleted: true,
                kitten: kitten
            });
        });
    });
};
