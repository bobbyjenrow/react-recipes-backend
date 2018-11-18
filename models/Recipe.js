var mongoose = require('mongoose')

// SubSchemas

var InstructionSchema = new mongoose.Schema({
  order: Number,
  content: String
})
var IngredientSchema = new mongoose.Schema({
  name: String,
  amount: String
})

// Main Schema
var RecipeSchema = new mongoose.Schema({
  name: String,
  subtitle: String,
  description: String,
  imageUrl: String,
  instructions: [InstructionSchema],
  ingredients: [IngredientSchema],
  tags: [String],
  rating: Number
})

// Generate Model
var Recipe = mongoose.model('Recipe', RecipeSchema);

// Export Schema and Model
module.exports = {
  RecipeSchema,
  Recipe
}
