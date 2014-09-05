# Music Quiz
Music Quiz is an app that leverages the Decibel API to ask questions about music.

## Dependencies

[http://nodejs.org/](Install NodeJS) to enable running the website from source locally and installing further dependencies with npm, Bower amd Grunt.

## Install this music quiz web app

### npm and bower

Install npm packages and bower libraries:

```
npm install
bower install
```

### config

There is a template .config.js file you can copy into a config.js file.
Store your secret keys in that config.js (without initial dot) but never commit it to a repository.


### SSL

You will need to setup SSL, either a self signed certificate or a real SSL.
The paths to your SSL is in your config.js file.


### Facebook config

Rename the ./src/client/js/.facebookConfig.js file as the same file name but without the initial dot, in the same directory.
Put in your actual Facebook Application Id and never commit this file (it's already in .gitignore).


### Decibel config

Set the Decibel API keys in the ./config.js file you created, based on the template ./.config.js file.


### Sass

Start the batch process that will watch for changes to the css styles and combine a single screen.css file from Sass.

Windows:

```
open the directory ./src/client/css/sass/
double click on watch.bat to open it and start its process (Windows only)
```

Mac OS:

```
cd ./src/client/css/sass/
sass --watch "screen.scss:../screen.css"
```

### MongoDB

Windows:

```
cd C:\Program Files\MongoDB 2.6 Standard\bin
mongod.exe --dbpath C:\mongodb\data
```

Max OS:

```
Install Mongo via brew:

cd /user/local
brew install mongodb

To start mongod (background demon) in a seperate/dedicated shell:

mkdir -p /usr/local/db    << this is required for only the first startup
ulimit -n 1024 && mongod --dbpath /usr/local/db
```


### Grunt

If you haven't already installed Grunt in your development environment, do so:

```
npm install -g grunt-cli
```

Run Grunt automated tasks:

```
grunt
```

Note on grunt: there is watch task that will wait for any change to Javascript files to rebuild the packages. This watch is to stay in its own terminal window.

## Run unit tests

The tests will re-run in the terminal every time a change is made to the unit tests.

```
./node_modules/karma/bin/karma start unit-tests/karma.conf.js
```

If a spec should be excluded, append "_Exclude" to its directory. For example:

```
mv ./unit-tests/spec/decibelAccount ./unit-tests/spec/decibelAccount_Exclude
```

## Consult the test coverage report

Once the unit tests are run, the test coverage report is updated and can be viewed as an html page.

Open index.html from:

```
./unit-tests/coverage/[your browser and OS name]/index.html
```

## Run from source.

Windows:

```
node ./server.js
```

Mac OS X:

```
node ./server.js
```

Browse to localhost on the port that is being listened to.


## Facebook login

OAuth from the [https://developers.facebook.com/docs/facebook-login/login-flow-for-web/v2.1](Facebook login is documented) on the official Facebook developer website. The [https://developers.facebook.com/docs/plugins/login-button](login button is documented) on the same site.


## Run from source once everything has been installed

Each command in a separate terminal since they watch for changes (grunt and karma) or just run continuously (node):

```
grunt
./node_modules/karma/bin/karma start unit-tests/karma.conf.js
node ./server.js
```
