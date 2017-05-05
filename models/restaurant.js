const Sequelize = require('sequelize');
const db = require('./db')

const Restaurant = db.define("restaurant",
// column definitions
{
	name: {
		type: Sequelize.STRING
	},
	cuisine: {
		type: Sequelize.STRING
		/***** HAVE TO MAKE A HOOK BEFOREVALIDATE TO MAKE INTO ARRAY *****/
	},
	price: {
		type: Sequelize.INTEGER(1, 5)
	}
},
// options
{

});

module.exports = Restaurant;