const Comment = require("../models/commentModel");

exports.comment_create_post = (req, res) => {
    const comment = new Comment({
        content: req.body.content,
        author: req.body.author,
        post: req.body.post
    })

    comment.save()
        .then(()=> res.json('Comment Added'))
        .catch(err => res.status(400).json('Error' + err));
}
