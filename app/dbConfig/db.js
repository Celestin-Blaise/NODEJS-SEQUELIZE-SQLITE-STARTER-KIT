//const db = require('sqlite3');
const Sequelize = require('sequelize');

module.exports = new Sequelize({
	// SQLITE
	dialect: 'sqlite',
	storage: './app/dbConfig/database.sqlite3'
});

///////////////*******MYSQL ********/////////////////

// module.exports = new Sequelize('resto', 'root', '', {
// 	host: 'localhost',
// 	dialect: 'mysql',
// 	user: 'root',
// 	port: 3306,
// 	define: {
// 		paranoid: true
// 	}
// });

///////////////*******POSTGRES ********/////////////////

// module.exports = new Sequelize('node', 'postgres', 'kibu1280', {
// 	dialect: 'postgres',
// 	define: {
// 		paranoid: true
// 	}
// });
