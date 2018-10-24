let Tag = require('../models/Tag').Tag;

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
  })
}
exports.update = (req,res)=>{
  Tag.findOneAndUpdate(req.body.id, (err,tag)=>{
    if (err) return next(err);
    res.send('Updated Tag ' + tag.name)
  })
}
exports.getAll = (req,res)=>{
  Tag.find(req.body.filter)
        .limit(10)
        .sort({rating: -1})
        .exec((err,tags)=>{
          if (err) return next(err);
          else res.send(tags);
        });
}
exports.getOne = (req,res,next)=>{
  Tag.findById(req.params.id, (err,tag)=>{
    if (err) return next(err);
    else res.send(tag);
  })
}
