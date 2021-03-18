/* eslint-disable indent */
import dotenv from "dotenv";
import { Environment } from "../types/constants";

dotenv.config();

let env: Environment;
switch (process.env.NODE_ENV) {
	case Environment.prod:
		env = Environment.prod;
		break;
	case Environment.stg:
		env = Environment.stg;
		break;
	default:
		env = Environment.dev;
}

const config = {
	NODE_ENV: <Environment>env,
	PORT: <number>parseInt(process.env.PORT) || 3000,
	CLIENT_ID: <string>process.env.CLIENT_ID || undefined,
	IS_PROD: <boolean>(process.env.NODE_ENV == "true" ? true : false),
	JWT_SECRET: <string>process.env.JWT_SECRET || undefined,
	JWT_EXPIRATION: <string | number>(60 * 1 * 60 * 24 * 7),
	CLIENT_SECRET: <string>process.env.CLIENT_SECRET || undefined,
	CALLBACK_URL: <string>process.env.CALLBACK_URL || undefined,
	DASHBOARD_CALLBACK_URL: <string>process.env.DASHBOARD_CALLBACK_URL || undefined,
	DASHBOARD_ORIGIN: <string>process.env.DASHBOARD_ORIGIN || undefined,
	COOKIE_SECRET: <string>process.env.COOKIE_SECRET || undefined,
};

if (config.CLIENT_ID === undefined || config.CLIENT_SECRET === undefined || config.CALLBACK_URL === undefined || config.DASHBOARD_CALLBACK_URL === undefined) {
	throw Error("CLIENT_ID || CLIENT_SECRET || CALLBACK_URL not specified || DASHBOARD_CALLBACK_URL not specified");
}

export default config;