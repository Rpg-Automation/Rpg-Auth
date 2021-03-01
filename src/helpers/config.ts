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
	CLIENT_SECRET: <string>process.env.CLIENT_SECRET || undefined,
	CALLBACK_URL: <string>process.env.CALLBACK_URL || undefined,
};

if (config.CLIENT_ID === undefined || config.CLIENT_SECRET === undefined || config.CALLBACK_URL === undefined) {
	throw Error("CLIENT_ID || CLIENT_SECRET || CALLBACK_URL not specified");
}

export default config;