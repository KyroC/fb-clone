const User = require("../models/userModel");

exports.user_create_get = (req, res) => {
    res.send(`NOT IMPLEMENTED: User Create Get`)
}

exports.user_create_post = (req, res) => {
    const user = new User({
        first_name: req.body.first_name,
        last_name:  req.body.last_name ,
        date_of_birth:  req.body.date_of_birth ,
        friend_requests: req.body.friend_requests ,
        friends: req.body.friends ,
    })

    user.save()
        .then(()=> res.json('User Added'))
        .catch(err => res.status(400).json('Error' + err));
}

exports.user_detail = (req, res) => {
    res.send(`NOT IMPLEMENTED: User Detail`)
}