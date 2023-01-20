const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const userRoutes = require('./api/userRoutes');

router.use('/User', userRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;