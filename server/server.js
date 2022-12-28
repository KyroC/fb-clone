const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('express').Router();
const session = require('express-session');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const User = require("./models/userModel");
const corsOptions ={
    origin:'https://top-static.onrender.com', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const indexRouter = require("./routes/index.js");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors(corsOptions));
app.use(bodyParser.json());

passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ email: username }, (err, user) => {
        if (err) { 
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }
        if (bcrypt.compare(password, user.password, (err, res) => {
          if (res) {
            // passwords match! log user in
            return done(null, user)
          } else {
            // passwords do not match!
            return done(null, false, { message: "Incorrect password" })
          }
        })) 
        return done(null, user);
      });
    })
);
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
});

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    res.json({user: req.user});
  });
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
  }),
  async (req, res) => {
    var idUser = req.user.id;
    console.log(idUser);
  }
);

app.use('/', indexRouter);



app.get("/log-out", (req, res, next) => {
req.logout(function (err) {
    if (err) {
    return next(err);
    }
    res.redirect("/");
});
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once(`open`, () => {
    console.log("MongoDB database has been establish successfully")
})

app.listen(port,'0.0.0.0', () => {
    console.log(`Server is running on port; ${port}`);
});