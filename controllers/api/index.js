const router = require('express').Router();
const productRoutes = require("./productRoutes")
const categoryRoutes = require('./categoryRoutes');
const userRoutes = require('./userRoutes');
const timeRoutes = require("./timeRoutes")

router.use('/categoryRoutes', categoryRoutes);
router.use('/productRoutes', productRoutes);
router.use('/timeRoutes', timeRoutes);
router.use('/User', userRoutes);
module.exports = router;
