const dotenv =  require('dotenv');
const { Environment } = require('./constants');
dotenv.config();

let env;
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
	NODE_ENV: env,
	PORT: parseInt(process.env.PORT) || 3000,
	CLIENT_ID: process.env.CLIENT_ID || undefined,
    CLIENT_SECRET: process.env.CLIENT_SECRET || undefined,
    CALLBACK_URL: process.env.CALLBACK_URL || undefined,
};

if (config.CLIENT_ID === undefined || config.CLIENT_SECRET === undefined || config.CALLBACK_URL === undefined) {
	throw Error("CLIENT_ID || CLIENT_SECRET || CALLBACK_URL not specified");
}

module.exports = config;