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
		scope: ["identify"]
	}, async (accessToken, refreshToken, profile, done): Promise<void> => {
		const { id, username, discriminator, avatar }: DiscordStrategy.Profile = profile;
		const user = { id, username, discriminator, avatar };
		return done(null, user);
	})
);

const _clientOptions: any =
{
	callbackURL: config.CLIENT_CALLBACK_URL,
	session: false,
};

const _dashboardOptions: any =
{
	callbackURL: config.DASHBOARD_CALLBACK_URL,
	session: false,
};

const ClientAuth: any = passport.authenticate("discord", _clientOptions);
const DashboardAuth: any = passport.authenticate("discord", _dashboardOptions);

export {
	ClientAuth,
	DashboardAuth
};