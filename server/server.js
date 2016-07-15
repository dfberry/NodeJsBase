'use strict';

var express = require('express');
//var wagner = require('wagner-core');
var favicon = require('serve-favicon');
var path = require('path');
//var modRewrite = require('connect-modrewrite');

var cli = false; // http instead

//require(__dirname + '/dependencies')(wagner);

module.exports = function(logging) {

    var app = express();
    
    function errorHandler(err, req, res, next) {
        if (res.headersSent) {
            return next(err);
        }
        res.status(500);
        res.render('error', { error: err });
    }

    if (logging) {
        app.use(require('morgan')('combined'));
    }

    /*
    app.use(modRewrite([
      '^/payments/v1(.*) - [L]',
      '^/Payments/v1(.*) - [L]',
      '^/accounts/v1/(.*) - [L]',
      '^/mail(.*) - [L]',
      '^.([^\\.]+)\\?(.*)$ /$1.html?$2 [L]',
      '^.([^\\.]+)$ /$1.html [L]'
    ]));
    */

    //app.use('/payments/v1', require(__dirname + '/payments')(wagner));
   
    //app.use('/accounts/v1', require(__dirname + '/accounts')(wagner));

    //app.use('/mail', require(__dirname + '/mail')(wagner));

    app.use('/', express.static(__dirname + '/../public', { maxAge: 4 * 60 * 60 * 1000 /* 2hrs */ }));

    return app;
};