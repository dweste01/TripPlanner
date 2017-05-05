'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const path = require('path');
const routes = require('./routes');

/* Nunjucks templating */
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });


/* Logging */
app.use(morgan('dev'));

/* Body Parser */
app.use(bodyParser.urlencoded( {extended: false }));
app.use(bodyParser.json());

/* Static files */
app.use(express.static(path.join(__dirname, './public')));


app.use('/', routes);


app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
})

app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	console.error(err);
	res.render('errorPage', err);

})

module.exports = app;