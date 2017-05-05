const Sequelize = require('sequelize');
const db = require('./db')

const Activity = db.define("activity", 
// column definitions
{
	name: {
		type: Sequelize.STRING
	},
	age_range: {
		type: Sequelize.STRING
	}

},
// options
{

});


module.exports = Activity;