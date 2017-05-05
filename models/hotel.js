const Sequelize = require('sequelize');
const db = require('./db')

const Hotel = db.define("hotel", 
// column definitions
{
	name: {
		type: Sequelize.STRING
	},
	num_stars: {
		type: Sequelize.FLOAT(1, 5)
		// type: Sequelize.ENUM(1, 2, 3, 4, 5)
	},
	amenities: {
		type: Sequelize.STRING
		/***** HAVE TO MAKE A HOOK BEFOREVALIDATE TO MAKE INTO ARRAY *****/
	}

},
// options
{


});

module.exports = Hotel;