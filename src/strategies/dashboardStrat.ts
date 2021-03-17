import passport from "passport";
import DiscordStrategy from "passport-discord";

import config from "../helpers/config";

passport.serializeUser((user, done): void => {
	done(null, user);
});

passport.deserializeUser((user, done): void => {
	done(null, user);
});

passport.use(
	new DiscordStrategy({
		clientID: config.CLIENT_ID,
		clientSecret: config.CLIENT_SECRET,
		callbackURL: config.DASHBOARD_CALLBACK_URL,
		scope: ["identify"]
	}, async (accessToken, refreshToken, profile, done): Promise<void> => {
		const { id, username, discriminator, avatar }: DiscordStrategy.Profile = profile;
		const user = { id, username, discriminator, avatar };
		return done(null, user);
	})
);

export default passport;