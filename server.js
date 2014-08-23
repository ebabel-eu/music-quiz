(function () {
    'use strict';

    // Load dependencies.
    var config = require('./config.js'),
        fs = require('fs'),
        https = require('https'),
        express = require('express'),
        compression = require('compression'),
        bodyParser = require('body-parser'),
        options = {
            key: fs.readFileSync('./ssl/server.key'),
            cert: fs.readFileSync('./ssl/server.crt'),
            ca: fs.readFileSync('./ssl/ca.crt'),
            requestCert: true,
            rejectUnauthorized: false
        },
        app = express(),
        server,
        authUrl;

    // Add SSL.
    https.createServer({key:options.key, cert:options.cert}, app);

    // Parse application/x-www-form-urlencoded.
    app.use(bodyParser.urlencoded({ extended: false }))

    // Parse application/json.
    app.use(bodyParser.json())

    // Parse application/vnd.api+json as json.
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

    // Simple logger.
    app.use(function (req, res, next) {
        console.log('%s %s', req.method, req.url);
        next();
    });

    // Set generic headers used in all responses.
    app.use(function (req, res, next) {
        res.set({
            'X-Powered-By': 'AngularJS',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',               // Allowed request http verbs.
            'Access-Control-Allow-Headers': 'X-Requested-With,content-type',    // Allowed request headers.
            'Cache-Control': 'public, max-age=' + config.expiryDate,
            'Expires': new Date(Date.now() + config.expiryDate).toUTCString()
        });
        next();
    });

    // Intercept POST request and switch it to a GET one.
    app.post('/', function (req, res, next) {
        req.method = 'GET';
        next();
    });

    // Handle all static file GET requests.
    app.use(express.static(__dirname + config.publicDirectory), {
        maxAge: config.expiryDate
    });

    // Start listening on a port.
    server = https.createServer(options, app).listen(config.port, function() {
        console.log("Secure Express server listening on port " + config.port);
    });
}());