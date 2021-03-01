"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable indent */
const dotenv_1 = __importDefault(require("dotenv"));
const constants_1 = require("../types/constants");
dotenv_1.default.config();
let env;
switch (process.env.NODE_ENV) {
    case constants_1.Environment.prod:
        env = constants_1.Environment.prod;
        break;
    case constants_1.Environment.stg:
        env = constants_1.Environment.stg;
        break;
    default:
        env = constants_1.Environment.dev;
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
exports.default = config;
//# sourceMappingURL=config.js.map