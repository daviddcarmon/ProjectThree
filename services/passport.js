const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    // opp to take id info and save into our db
    (accessToken, refreshToken, profile, done) => {
      //console.log("access token", accessToken);
      //console.log("refresh token", refreshToken);
      console.log("profile", profile);
    }
  )
);
