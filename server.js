(function () {
    'use strict';

    // Load dependencies.
    var config = require('./config.js'),
        fs = require('fs'),
        https = require('https'),
        express = require('express'),
        compression = require('compression'),
        bodyParser = require('body-parser'),
        ssl = {
            key: fs.readFileSync(config.ssl.key),
            cert: fs.readFileSync(config.ssl.cert),
            requestCert: config.ssl.requestCert,
            rejectUnauthorized: config.ssl.rejectUnauthorized
        },
        app = express(),
        server,
        authUrl;

    // Optional ssl parameter: certificate authority ca
    if (config.ssl.ca) {
        ssl.ca = fs.readFileSync(config.ssl.ca);
    }

    // Add SSL.
    https.createServer({key:ssl.key, cert:ssl.cert}, app);

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
            'Access-Control-Allow-Methods': 'GET, POST, ssl',               // Allowed request http verbs.
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

    //simple test from http://inessential.com/2013/12/09/getting_started_with_web_services_using_
    app.get('/now', function(request, response) {
      var d = new Date();
      response.send(200, {date: d});
    });

    //simple test re-write as post
    app.post('/now', function(request, response) {
      var d = new Date();
      response.send(200, {date: d});
    });


    // app.post('/dob', function(request, response) {
    //   //var dob = request.body;
    //   var age = Date.now() - request.dob;
    //   response.send(200, {approx_age: age});
    // });


    var mongoose = require( 'mongoose' );
    var Schema   = mongoose.Schema;
     
    var FBUser = new Schema({
        user_id    : String,
        firstname  : String,
        lastname   : String,
        created_at : Date,
        updated_at : Date
    });
     
    mongoose.model( 'FBUser', FBUser );
    mongoose.connect( 'mongodb://localhost/music-quiz' );

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
      console.log("mongoose connection OK " );

    var kittySchema = mongoose.Schema({
        name: String
    })

    kittySchema.methods.speak = function () {
      var greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name"
      console.log(greeting);
    }

    var Kitten = mongoose.model('Kitten', kittySchema)

    var Edwina = new Kitten({ name: 'Edwina' });
    Edwina.save(); 
    Edwina.speak(); 

    });










    // Handle all static file GET requests.
    app.use(express.static(__dirname + config.publicDirectory), {
        maxAge: config.expiryDate
    });





    // Start listening on a port.
    server = https.createServer(ssl, app).listen(config.port, function() {
        console.log("Secure Express server listening on port " + config.port);
    });
}());