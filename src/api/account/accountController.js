module.exports = function (app, options) {

    var mongoose = options.mongoose,
        Schema = options.mongoose.Schema,
        db = options.db,
        accountModel = require('./accountModel')(db);

    // Get a list of all account records.
    app.get('/api/1.0.0/account', function (req, res) {
        // Mongoose querying via querystring. 
        // Ex: append ?limit=2 or ?filter={"name": "Ido"}
        var qSkip = req.query.skip,
            qLimit = req.query.limit,
            qSort = req.query.sort,
            qFilter = req.query.filter ? JSON.parse(req.query.filter) : {};

        accountModel.find(qFilter)
            .sort(qSort)
            .skip(qSkip)
            .limit(qLimit)
            .exec(function (err, account) {
                if (err) return options.handleError(err, req, res, 'Could not list the records.');
                
                res.send({
                    records: account.length,
                    account: account
                });
            });
    });

    // Create a new account.
    app.post('/api/1.0.0/account', function (req, res) {
        var account = new accountModel(req.body);

        account.createAt = Date.now();

        account.save(function (err) {
            if (err) return options.handleError(err, req, res, 'Could not create the record.');
            
            res.send({
                created: true,
                account: account
            });
        });
    });

    // Get a single account by its unique id.
    app.get('/api/1.0.0/account/:id', function (req, res) {
        accountModel.findById(req.params.id, function (err, account) {
            if (err) return options.handleError(err, req, res, 'Could not find the record.');
            
            res.send({
                found: account !== null,
                account: account
            });
        });
    });

    // Find a single account by its unique id and update its record.
    app.put('/api/1.0.0/account/:id', function (req, res) {
        accountModel.findById(req.params.id, function (err, account) {
            if (err) return options.handleError(err, req, res, 'Could not find the record to update.');

            var updated = req.body;
            updated.updateAt = Date.now();
            updated.__v = account.__v + 1;

            account.update(
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
                        previous: account,
                        updated: req.body
                    });
                }
            );
        });
    });

    // Delete a single account record by its unique id.
    app.delete('/api/1.0.0/account/:id', function (req, res) {
        accountModel.findByIdAndRemove(req.params.id, function (err, account) {
            if (err) return options.handleError(err, req, res, 'Could not delete the record.');

            res.send({
                deleted: true,
                account: account
            });
        });
    });
};
