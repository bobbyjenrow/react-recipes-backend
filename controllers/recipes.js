let Recipe = require('../models/Recipe').Recipe

exports.create = (req,res,next)=>{
  var newRecipe = new Recipe(req.body);
  newRecipe.save((err,recipe )=> {
    if (err) return next(err)
    else res.send(recipe.name + ' Recipe Added')
  });
}
exports.delete = (req,res,next)=>{
  Recipe.findByIdAndDelete(req.params.id, (err,recipe)=>{
    if (err) return next(err);
    else res.send('Removed Recipe ' + recipe.name)
  })
}
exports.update = (req,res,next)=>{
  Recipe.findByIdAndUpdate(req.params.id, (err,recipe)=>{
    if (err) return next(err);
    else res.send('Updated Recipe ' + recipe.name)
  })
}
exports.getAll = (req,res,next)=>{
  Recipe.find(req.body.filter)
        .limit(10)
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
