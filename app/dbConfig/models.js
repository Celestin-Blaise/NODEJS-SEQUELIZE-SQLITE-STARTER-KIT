const Sequelize = require('sequelize');
const db = require('./db');

const Posts = db.define('posts', {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	content: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

const Profile = db.define('profile', {
	name: {
		type: Sequelize.STRING,
		allowNull: true
	},
	password: {
		type: Sequelize.STRING,
		allowNull: true
	}
});

const Count = db.define('count', {
	count: {
		type: Sequelize.STRING,
		allowNull: true
	}
});

// ////////*** IF OVERWRITING EXISTING TABLE DATA === Posts.sync({ force: true }).then.... ***/

// Count.sync({ force: true }).then(() => {
// 	// Now the `users` table in the database corresponds to the model definition
// 	return Count.create({
// 		count: 1
// 	});
// });

module.exports = {
	posts: Posts,
	profile: Profile,
	Count: Count
};
