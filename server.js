(function () {
    'use strict';

    // Load dependencies.
    var config = require('./config.js'),
        fs = require('fs'),
        https = require('https'),
        express = require('express'),
        compression = require('compression'),
        bodyParser = require('body-parser'),
        mongoose = require('mongoose'),
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


    mongoose.connect( 'mongodb://localhost/music-quiz' );
    var db = mongoose.connection,
        Schema,
        FBUser,
        objFBUser,
        currentFBUser;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
      console.log("mongoose connection OK " );

        Schema   = mongoose.Schema;
        FBUser = new Schema({
            user_id    : String,
            firstname  : String,
            lastname   : String,
            gender     : String,
            age_range  : String,
            created_at : Date,
            updated_at : Date
        });
 
        FBUser.pre('save', function(next){
          var now = new Date();
          this.updated_at = now;
          if ( !this.created_at ) {
            this.created_at = now;
          }
          next();
        });

        objFBUser = mongoose.model( 'FBUser', FBUser );

        currentFBUser = new objFBUser({user_id:'41',firstname:'Mark',lastname:'Zuckerberg',gender:'M',age_range:'21+'  });

        console.log(currentFBUser);
        currentFBUser.save(); 

    });



    app.post('/api/test', function(req, res) { //A
        var object = req.body;
        var collection = req.params;
        console.log(collection);
        console.log(object);
        // collectionDriver.save(collection, object, function(err,docs) {
        //       if (err) { res.send(400, err); } 
        //       else { res.send(201, docs); } //B
        //  });
        res.send('hello world')
    });

    app.post('/api/:version/account', function (req, res) {
        var account = req.body;

        account.apiVersion = req.params.version;


        currentFBUser = new objFBUser({user_id:account.id,firstname:account.firstname,lastname:account.lastname,gender:'M',age_range:'21+'  });

        console.log(currentFBUser);
        currentFBUser.save(); 

        // Check if this is a new account signup.
        account.signup = true;

        // Check if account has been saved
        account.saved = true;

        res.send(account);
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