const router = require('express').Router();
const { use } = require('./user-routes.js');

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const CommentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', CommentRoutes);

module.exports = router;
