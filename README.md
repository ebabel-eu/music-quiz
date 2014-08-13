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

### Sass

Start the batch process that will watch for changes to the css styles and combine a single screen.css file from Sass:

```
open the directory ./src/css/sass/
double click on watch.bat to open it and start its process (Windows only)
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

## Facebook login

OAuth from the [https://developers.facebook.com/docs/facebook-login/login-flow-for-web/v2.1](Facebook login is documented) on the official Facebook developer website. The [https://developers.facebook.com/docs/plugins/login-button](login button is documented) on the same site.


## Assembly community

This is a product being built by the Assembly community. You can help push this idea forward by visiting [https://assembly.com/music-quiz](https://assembly.com/music-quiz).

### How Assembly Works

Assembly products are like open-source and made with contributions from the community. Assembly handles the boring stuff like hosting, support, financing, legal, etc. Once the product launches we collect the revenue and split the profits amongst the contributors.

Visit [https://assembly.com](https://assembly.com) to learn more.