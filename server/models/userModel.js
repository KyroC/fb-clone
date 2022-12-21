const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {type:String, required: true},
    password:  {type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
    friend_requests: [{ type: Schema.Types.ObjectId, ref:"User"}],
    friends: [{ type: Schema.Types.ObjectId, ref:"User"}],
})
module.exports = mongoose.model("User", userSchema);