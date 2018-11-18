let Recipe = require('../models/Recipe').Recipe

var request = require('request-promise')

exports.create = (req,res,next)=>{
  const id = Math.floor(Math.random(21) * 200);
  const data = `https://source.unsplash.com/collection/251966/${id}`;
  var newRecipe = new Recipe({...req.body, imageUrl: data});
  newRecipe.save((err,recipe )=> {
    if (err) return next(err)
    else res.send((recipe.name ? recipe.name : '') + ' Recipe Added')
})}
exports.delete = (req,res,next)=>{
  Recipe.findByIdAndDelete(req.params.id, (err,recipe)=>{
    if (err) return next(err);
    else res.send('Removed Recipe ' + recipe.name ? recipe.name : '')
  })
}
exports.update = (req,res,next)=>{
  Recipe.findByIdAndUpdate(req.params.id, (err,recipe)=>{
    if (err) return next(err);
    else res.send('Updated Recipe ' + recipe.name ? recipe.name : '')
  })
}
exports.getAll = (req,res,next)=>{
  Recipe.find(req.body.filter)
        .limit(100)
        .sort({rating: -1})
        .exec((err,recipes)=>{
          if (err) return next(err);
          else res.send(recipes);
        });
}
exports.getOne = (req,res,next)=>{
  Recipe.findById(req.params.id, (err,recipe)=>{
    if (err) return next(err);
    else res.send(recipe);
  })
}
