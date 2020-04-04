const express = require('express');
const router = express.Router();
const Models = require('../dbConfig/models');
const Posts = Models.posts;
const Profile = Models.profile;
const count = Models.Count;
const db = require('../dbConfig/db');

router.get('/get', (req, res) => {
	count
		.findAll()
		.then((data) => {
			res.send(data);
		})
		.catch((error) => console.log('ERROR_WHILE_FETCHING_DATA', error));
});

router.get('/query/:par', (req, res) => {
	count
		.findAll({ where: { count: req.params.par } })
		.then((data) => {
			console.log('data:', data);
			res.send(data);
		})
		.catch((error) => console.log('ERROR_WHILE_FETCHING_DATA', error));
});

router.post('/update/:id', (req, res) => {
	count
		.sync()
		.then(() => {
			const data = req.body.count;
			return count.destroy(
				{
					count: data
				},
				{ where: { id: req.params.id } }
			);
		})
		.then(() => res.send('☑️ 👍👍👍 DATA UPDATED'));
});

router.post('/delete/:id', (req, res) => {
	count
		.sync()
		.then(() => {
			const data = req.body.count;
			return count.destroy({ where: { id: req.params.id } });
		})
		.then(() => res.send('☑️ 👍👍👍 COUNT DELETED'));
});

router.post('/post', (req, res) => {
	//Posts.sync()

	count
		.sync()
		.then(() => {
			const data = req.body.count;
			return count.create({
				count: data
			});
		})
		.then(() => res.send('☑️ 👍👍👍 DATA ADDED TO THE PROFILE TABLE'));

	// Profile.sync()
	// 	.then(() => {
	// 		// Now the `users` table in the database corresponds to the model definition
	// 		// const data = req.body;
	// 		const data = {
	// 			name: 'User2',
	// 			password: 'user1234'
	// 		};
	// 		return Profile.create(data);
	// 	})
	// 	.then(() =>
	// 		//res.redirect('/get')
	// 		res.send('☑️ 👍👍👍 DATA ADDED TO THE PROFILE TABLE')
	// 	);
	// const data = {
	// 	title: 'A NEW ARTICLE',
	// 	content: 'CONNECTION TO MYSQL HAS BEEN ESTABLISHED SUCCESSFULY'
	// };
	// return Posts.create(data);
});
// 	Posts.create({
// 		title: 'A NEW ARTICLE',
// 		content: 'CONNECTION TO MYSQL HAS BEEN ESTABLISHED SUCCESSFULY'
// 	});

// router.delete('/delete/:id', (req, res) => {
// 	res.send({
// 		type: 'Delete Request'
// 	});
// });

module.exports = router;
