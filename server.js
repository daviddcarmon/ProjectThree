// dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");
const passport = require("passport");

require("./services/passport");

// configure dotenv
// require("dotenv").config();

// new express app
const app = express();

app.use(logger("dev"));

//  middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// //  routes'
const routes = require("./routes");
// app.use(routes);

// serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  );
}

// // connect to database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/projectthree",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
);

//middleware, using cookies to handle authentication
app.use(
  //call cookieSession and provide a configuration object, 1st property is how long this cookie can exist in the browser before it expires.2nd property is a key that will be used to encrypt cookie
  cookieSession({
    //we want the cookie to last 45 days
    maxAge: 45 * 24 * 60 * 60 * 1000,
    //passed in from keys file
    keys: [keys.cookieKey],
  })
);

//tell passport to use cookies to manage authentication
app.use(passport.initialize());
app.use(passport.session());

//valid JS. when we require the authRoutes file it returns a function and then we immediately call that function with the app object. app is passed into the arrow function, we attach the 2 route handlers to it
require("./routes/authRoutes")(app);

const router = require("./routes");
app.use(router);
// app.use(require("./routes/api.js"));

// define PORT
const PORT = process.env.PORT || 5001;

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// start the server
app.listen(PORT, function () {
  console.log(`server running on port http://localhost:${PORT}`);
});

// google sign in with passport
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: "164450595462-al02hqggron841978bc5a60hn8ee3dl0",
//       clientSecret: "jADLED0we03eFSCMKltu2KrW",
//       callbackURL: "http://www.example.com/auth/google/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return done(err, user);
//       });
//     }
//   )
// );
