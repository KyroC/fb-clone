const Comment = require("../models/commentModel");
const Post = require("../models/postModel")

exports.comment_create_post = async (req, res) => {
    const comment = new Comment({
        content: req.body.content,
        author: req.body.author,
        post: req.body.post
    })

    await comment.save()
        .then(()=> res.json('Comment Added'))
        .catch(err => res.status(400).json('Error' + err));
    
    const postRelated = await Post.findById(req.body.post);

    postRelated.comments.push(comment);

    await postRelated.save(function(err) {
        if(err) {console.log(err)}
        console.log("post post success")
    })
}
