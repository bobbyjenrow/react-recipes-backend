let Recipe = require('../models/Recipe').Recipe

const handleErr = (err)=>{
  res.send(err);
}

const addRecipe = (req,res)=>{
  var newRecipe = new Recipe(req.body);
  newRecipe.save((err,recipe )=> {
    if (err) return handleErr(err)
    res.send(recipe.name + ' Recipe Added')
  });
}
const removeRecipe = (req,res)=>{
  Recipe.findOneAndDelete(req.body.id, (err,recipe)=>{
    if (err) return handleErr(err);
    res.send('Removed Recipe ' + recipe.name)
  )
}
const updateRecipe (req,res)=>{
  Recipe.findOneAndUpdate(req.body.id, (err,recipe)=>{
    if (err) return handleErr(err);
    res.send('Updated Recipe ' + recipe.name)
  })
}
const getRecipes(req,res)=>{
  Recipe.find(req.body.filter, (err,recipes)=>{
    if (err) return handleErr(err);
    res.send(recipes);
  })
}

module.exports = {
  addRecipe,
  removeRecipe,
  updateRecipe,
  getRecipes
}
