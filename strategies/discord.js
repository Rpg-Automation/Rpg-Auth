const passport = require('passport');
const DiscordStrategy = require('passport-discord');

const { CLIENT_ID, CLIENT_SECRET, CALLBACK_URL } = require('../helpers/config')

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(
    new DiscordStrategy({
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: CALLBACK_URL,
        scope: ['identify']
    }, async (accessToken, refreshToken, profile, done) => {
        const { id, username, discriminator, avatar } = profile;
        const user = { id, username, discriminator, avatar };
        return done(null, user);
    })
);