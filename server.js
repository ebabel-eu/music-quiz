(function () {
    'use strict';

    // Load dependencies.
    var express = require('express'),
        compression = require('compression'),
        app = express(),
        tenYears = 86400000 * 365.2425 * 10,
        ip = '127.0.0.1',
        port = 8080;

    // Gzip compression.
    app.use(compression());

    // Simple logger.
    app.use(function (req, res, next) {
        console.log('%s %s', req.method, req.url);
        next();
    });

    // Set generic headers used in all responses.
    app.use(function (req, res, next) {
        res.set({
            'X-Powered-By': 'AngularJS',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',                     // Allowed request methods.
            'Access-Control-Allow-Headers': 'X-Requested-With,content-type',    // Allowed request headers.
            'Cache-Control': 'public, max-age=' + tenYears,
            'Expires': new Date(Date.now() + tenYears).toUTCString()
        });
        next();
    });

    // Static file requests.
    app.use(express.static(__dirname + '/src'), {
        maxAge: tenYears
    });

    // Start listening on a port.
    app.listen(port, ip, function () {
        console.log('Listening on ' + ip + ':' + port);
    });
}());