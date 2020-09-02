const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

// fetch out of mongoose, 1 argument means we are trying to fetch, 2 arguments means we are trying to load something into mongoose,
// this user object is our model class
const User = mongoose.model("users");

// user is what we want to get out of the database, take that model and generate a piece of identifying info form it and return from this fx and will be used by passport to set up cookie for us
passport.serializeUser((user, done) => {
  // done is a callback that we have to call after we have done some worl to nudge passport along. 1st arg is an error onj, 2nd arg is the identifying piece of info that indentifies user in following requests. this id is not the profile id. this is the id in mongo db. this is what we use in the cookie and we can assume every user will have an id assigned by Mongo.
  done(null, user.id);
});

// we take id we put into cookie and turn it into a user model instance where 1st arg is exact token we stuck in the cookie. user model instance added to req obj as rq.user

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

// insdie fx call GoogleStrategy creates a new instance of the passport sstrategy, app authenticates user with google, inside this constructor we are passing in some config that tells this google strategy how to authenticate users.

// passport.use knows how to handle uth in general, have to give strategy a client id and client secret from o auth service

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    // opp to take id info and save into our db
    (accessToken, refreshToken, profile, done) => {
      // in cb fx we are going to user user model class to create a new instance of a user and pass in pbject with all properties that this user will have.

      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // we have record with given profile id. [ass 2 args to done, 1st is null tnhere is no error here, 2nd arg is the user record which tells passport here is the user we found, now we're finished
          done(null, existingUser);
        } else {
          new User({
            googleId: profile.id,
          })
            // we dont want to call done until we know for sure user has been saved to db
            .save()
            .then((user) => done(null, user));
        }
      });

      console.log("access token", accessToken);
      console.log("refresh token", refreshToken);
      console.log("profile", profile);
    }
  )
);

const a = document.getElementById("google-btn");
console.log(a);
