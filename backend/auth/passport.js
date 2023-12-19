import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt} from "passport-jwt";
import User from "../models/userModel.js";


//based on https://www.youtube.com/watch?v=VWEJ-GhjU4U
passport.use(
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.secretKey,
  },
  function (jwtPayload, done) {
    return User.findOne({ where: { id: jwtPayload.id } })
      .then((user) => {
        return done(null, user);
      })
      .catch((err) => {
        return done(err);
      });
  })
);



