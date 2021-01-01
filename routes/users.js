const router = require('express').Router();

const { User } = require('../models/index')

router.post('/', (req, res) => {
	const newUser = new User({
		UserName: req.body.UserName,
		Email: req.body.Email,
		Password: req.body.Password
	});

	newUser.save().then(data => res.json(data)).catch((err) => {
		console.log(err);
		res.status(400).json({
			message: "Failed to save User!"
		})
	})
})


router.get('/', (req, res) => {
	User.find().then(data => res.json(data)).catch(err => {
		console.log(err);
		res.status(400).json({
			message: "Failed to fetch Users"
		})
	})
})
module.exports = router;

