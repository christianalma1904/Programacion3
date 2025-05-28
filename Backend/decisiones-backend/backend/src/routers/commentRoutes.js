const router = require('express').Router();
const { getByPost, create } = require('../controllers/commentController');

router.get('/:postId', getByPost);
router.post('/', create);

module.exports = router;