const router = require('express').Router();
const { getAll, create } = require('../controllers/postController');

router.get('/', getAll);
router.post('/', create);

module.exports = router;