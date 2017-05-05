'use strict';

const db = require('./models')
// const express = require('express');
// const app = express();
const app = require('./app');


db.sync({force: true})
.then(function() {
	/* listen on port */
	app.listen(3000, function() {
		console.log("Listening on port 3000");
	})
}).catch(console.error);

