'use strict';

// const Sequelize = require('sequelize');
// const db = new Sequelize('postgres://localhost:5432/tripplanner', {logging: false})
const db = require("./db");

const Place = require("./places");
const Hotel = require("./hotel");
const Activity = require("./activity");
const Restaurant = require("./restaurant");


Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);


module.exports = db;