const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref:"User", required: true},
    comments:  [{type: Schema.Types.ObjectId, ref:"Comment"}],
    likes: [{type: Schema.Types.ObjectId, ref:"User"}],
    date: { type: Date },
})

postSchema.virtual('url').get(function(){
    return '/post/' + this._id
})

module.exports = mongoose.model("Post", postSchema);