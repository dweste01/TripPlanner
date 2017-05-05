const Sequelize = require('sequelize');
const db = require('./db')

const Place = db.define("place",
// column definitions
{
	address: {
		type: Sequelize.STRING
	},
	city: {
		type: Sequelize.STRING
	},
	state: {
		type: Sequelize.STRING
	},
	phone: {
		type: Sequelize.STRING
	},
	location: {
		type: Sequelize.ARRAY(Sequelize.FLOAT)
	}
},
// options
{

});

module.exports = Place;