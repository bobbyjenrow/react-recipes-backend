var mongoose = require('mongoose')

// SubSchemas
var TagSchema = require('tag').TagSchema

var StepSchema = new mongoose.Schema({
  order: Number,
  content: String
})
var IngredientSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  units: String // TODO: Add enum to units
})

// Main Schema
var RecipeSchema = new mongoose.Schema({
  name: String,
  subtitle: String,
  body: String,
  steps: [StepSchema],
  ingredients: [IngredientSchema]
  tags: [TagSchema]
})

// Generate Model
var Recipe = mongoose.model('Recipe', RecipeSchema);

// Export Schema and Model
module.exports = {
  RecipeSchema,
  Recipe
}