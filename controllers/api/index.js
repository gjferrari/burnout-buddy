const router = require('express').Router();
const productRoutes = require("./productRoutes")
const categoryRoutes = require('./categoryRoutes');
const userRoutes = require('./userRoutes');
const timeRoutes = require("./timeRoutes");
const quizRoutes = require('./quizRoutes')

router.use('/categoryRoutes', categoryRoutes);
router.use('/productRoutes', productRoutes);
router.use('/timeRoutes', timeRoutes);
router.use('/User', userRoutes);
router.use('/quiz', quizRoutes);

module.exports = router;
