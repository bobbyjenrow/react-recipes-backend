exports.create = (req,res)=>{
  var newTag = new Tag(req.body);
  newTag.save((err,tag )=> {
    if (err) return next(err)
    res.send(tag.name + ' Tag Added')
  });
}
exports.delete = (req,res)=>{
  Tag.findOneAndDelete(req.body.id, (err,tag)=>{
    if (err) return next(err);
    res.send('Removed Tag ' + tag.name)
  )
}
exports.update = (req,res)=>{
  Tag.findOneAndUpdate(req.body.id, (err,tag)=>{
    if (err) return next(err);
    res.send('Updated Tag ' + tag.name)
  })
}
exports.getAll = (req,res)=>{
  Tag.find(req.body.filter, (err,tags)=>{
    if (err) return next(err);
    res.send(tags);
  })
}
