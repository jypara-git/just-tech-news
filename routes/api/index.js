const router = require('express').Router();
const { use } = require('./user-routes.js');

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;