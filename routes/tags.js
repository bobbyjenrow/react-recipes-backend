var express = require('express');
var router = express.Router();
var tags = require('../controllers/tags');

/* GET users listing. */
router.get('/', getAll(req,res,next));
router.get('/:id', getOne(req,res,next));
router.post('/create', recipes.create(req,res,next));
router.delete('/:id', recipes.delete(req,res,next));
router.patch('/:id',recipes.update(req,res,next));
module.exports = router;
