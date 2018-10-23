var mongoose = require('mongoose')

var TagSchema = new mongoose.Schema({
  name: String,
  description: String
})

var Tag = mongoose.model('Tag', TagSchema);

module.exports = {
  TagSchema,
  Tag
}
