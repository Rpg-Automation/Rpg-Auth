import jwt from "jsonwebtoken";

import config from "./config";
import { IJwtPayload } from "../types/jwt";

export default class Jwt {

	/**
	 *
	 * serialize a payload of information
	 * @static
	 * @param {IJwtPayload} payload
	 * @return {*}  {Promise<string>}
	 * @memberof Jwt
	 */
	public static async Sign(payload: IJwtPayload): Promise<string> {
		return new Promise((resolve, reject) => {
			try {
				const token = jwt.sign(payload, config.JWT_SECRET, {
					expiresIn: config.JWT_EXPIRATION
				});
				return resolve(token);
			} catch (error) {
				return reject(error);
			}
		});
	}

	/**
	 *
	 * decode a jsonwebtoken
	 * @static
	 * @param {string} token
	 * @return {*}  {Promise<IJwtPayload>}
	 * @memberof Jwt
	 */
	public static async Verify(token: string): Promise<IJwtPayload> {
		return new Promise((resolve, reject) => {
			try {
				const data = jwt.verify(token, config.JWT_SECRET) as IJwtPayload;
				return resolve({
					id: data.id,
					avatar: data.avatar,
					username: data.username,
					discriminator: data.discriminator,
					iat: data.iat,
					exp: data.exp
				});
			} catch (error) {
				return reject(error);
			}
		});
	}
}