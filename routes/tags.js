var express = require('express');
var router = express.Router();
var tags = require('../controllers/tags');

/* GET users listing. */
router.get('/', tags.getAll);
router.get('/:id', tags.getOne);
router.post('/create', tags.create);
router.delete('/:id', tags.delete);
router.patch('/:id', tags.update);
module.exports = router;
