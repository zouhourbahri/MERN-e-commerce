const User = require('../models/User');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('config');
const secretOrKey = config.get('secretOrKey');


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey,
};

passport.initialize();
passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
        const { id } = jwt_payload;
        try {
            const user = await (await User.findById(id)).isSelected('-password');
            user ? done(null, user) : done(null, false);
        } catch (error) {
            res.status(500).json({errors: error});
        }
    })
);

module.exports = Authorized = () => passport.authenticate('jwt', {session : false});