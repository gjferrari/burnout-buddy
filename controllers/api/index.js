const router = require('express').Router();

const categoryRoutes = require('./categoryRoutes');
const userRoutes = require('./userRoutes');

router.use('/categoryRoutes', userRoutes);
router.use('/User', userRoutes);
module.exports = router;