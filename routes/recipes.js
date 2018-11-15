var express = require('express');
var router = express.Router();
var recipes = require('../controllers/recipes');

/* GET users listing. */
router.get('/', recipes.getAll);
router.get('/:id', recipes.getOne);
router.post('/', recipes.create);
router.delete('/:id', recipes.delete);
router.patch('/:id',recipes.update);
module.exports = router;
