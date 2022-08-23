const router = require('express').Router();
const diningRoutes = require('./DiningRoutes');
const reviewRoutes = require('./ReviewRoutes');
const userRoutes = require('./UserRoutes');

router.use('/dining', diningRoutes);
router.use('/review', reviewRoutes);
router.use('/user', userRoutes);

module.exports = router;