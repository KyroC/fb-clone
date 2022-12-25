const User = require("../models/userModel");
const bcrypt = require("bcryptjs");


exports.user_create_get = (req, res) => {
    res.send(`NOT IMPLEMENTED: User Create Get`)
}

exports.user_create_post = (req, res) => {
    var hashedpass = ""
    
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        if(err) {
            return(err)
        } 
        else {
            const user = new User({
                email: req.body.email,
                password: hashedPassword,
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
        // otherwise, store hashedPassword in DB
      });
    
}

exports.user_detail = (req, res) => {
    res.send(`NOT IMPLEMENTED: User Detail`)
}