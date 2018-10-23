let Tag = require('../models/Tag').Tag

const handleErr = (err)=>{
  res.send(err);
}

const addTag = (req,res)=>{
  var newTag = new Tag(req.body);
  newTag.save((err,tag )=> {
    if (err) return handleErr(err)
    res.send(tag.name + ' Tag Added')
  });
}
const removeTag = (req,res)=>{
  Tag.findOneAndDelete(req.body.id, (err,tag)=>{
    if (err) return handleErr(err);
    res.send('Removed Tag ' + tag.name)
  )
}
const updateTag (req,res)=>{
  Tag.findOneAndUpdate(req.body.id, (err,tag)=>{
    if (err) return handleErr(err);
    res.send('Updated Tag ' + tag.name)
  })
}
const getTags(req,res)=>{
  Tag.find(req.body.filter, (err,tags)=>{
    if (err) return handleErr(err);
    res.send(tags);
  })
}

module.exports = {
  addTag,
  removeTag,
  updateTag,
  getTags
}
