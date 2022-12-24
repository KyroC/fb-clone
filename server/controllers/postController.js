const Post = require("../models/postModel");

exports.post_create_post = (req, res) => {
    const post = new Post ({
    content: req.body.content,
    author: req.body.author,
    comments:  req.body.comments,
    likes: req.body.likes,
    date: new Date()
    })
    post.save()
    .then(()=> res.json('Post Added'))
    .catch(err => res.status(400).json('Error' + err));
}

exports.post_detail = (req, res, next) => {
   Post.find({})
   .populate('author comments')
   .exec(function(err, posts){
        if (err) {
            res.status(400).send("Error fetching listings!");
        } else {
            res.json(posts);
        }
    });
}