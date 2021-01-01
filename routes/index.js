const router = require('express').Router();

router.use('/categories', require('./categories'))
router.use('/items', require('./items'))
router.use('/users', require('./users'))

module.exports = router;