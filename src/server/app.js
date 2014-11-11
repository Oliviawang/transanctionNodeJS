/**
 * Created by owang on 10/6/14.
 */



var express=require('express');
var app=express();
var path=require('path');
var logger=require('morgan');
var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');
// diff routers
var routers=require('./routers');


// setting template folder, engine
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

var publicDir;
if (app.get('prod')) {
    publicDir = path.join(__dirname, '../../production-build');

} else {
    publicDir = path.join(__dirname, '../public');
}
var baseDir = path.join(__dirname, '../../');
app.use(express.static(publicDir));
app.use('/static', express.static(publicDir));
app.use('/base', express.static(baseDir));
var faviconPath = path.join(publicDir, 'img/logo.png');
app.use('/favicon.ico', express.static(faviconPath));

// configure routes
routers.configure(app);


/// catch 404 and forwarding to error handler
app.use(function(req, res) {
    res.status(404);
    res.render('404', {
        url: req.url,
    });
});

/// error handler
app.use(function(err, req, res) {
    res.render('error', {
        message: err.message
    });
});

module.exports = app;