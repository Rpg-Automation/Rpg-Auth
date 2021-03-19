import { Request, Response, NextFunction, RequestHandler } from "express";
import Jwt from "../helpers/jwt";

const authenticateToken: RequestHandler =
	async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
		try {
			const token = req.signedCookies.token;

			if (token == null) {
				res.locals.jwt = null;
				throw "missing jwt";
			}

			const payload = await Jwt.Verify(token);
			if (!payload) {
				res.locals.jwt = null;
				throw "invalid jwt";
			}

			res.locals.jwt = payload;
			return next();
		} catch (e) {
			res.locals.jwt = null;
			next(e);
		}
	};

export default authenticateToken;
