const express = require('express');
const router = express.Router();
const models = require('../models')

const Hotel = models.Hotel;
const Activity = models.Activity;
const Place = models.Place;
const Restaurant = models.Restaurant;

router.get('/', function(req, res, next) {
	Hotel.findAll()
	.then(function)
	res.render('index');
})

module.exports = router;