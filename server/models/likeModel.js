const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref:"User"},
})

module.exports = mongoose.model("Like", LikeSchema);