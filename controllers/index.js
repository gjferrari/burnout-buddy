const router = require('express').Router();
const productRoutes = require('./api/productRoutes');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const userRoutes = require('./api/userRoutes');
const categoryRoutes = require('./api/categoryRoutes');

router.use('/User', userRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);


module.exports = router;