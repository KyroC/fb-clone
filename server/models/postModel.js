const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref:"User"},
    comments:  [{type: Schema.Types.ObjectId, ref:"Comment"}],
    likes: [{type: Schema.Types.ObjectId, ref:"Likes"}],
})

module.exports = mongoose.model("Post", postSchema);