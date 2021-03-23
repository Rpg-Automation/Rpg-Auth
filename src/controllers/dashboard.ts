import express, { NextFunction, Request, Response, Router } from "express";

import jwtMiddleware from "../middleware/jwtCookie";

const router: Router = express.Router();

router.post("/verify", jwtMiddleware,
	async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
		try {
			res.header("Authorization", req.signedCookies.token);
			return res.status(200).json({
				ok: true,
				status: 200,
				data: res.locals.jwt
			});
		} catch (e) {
			next(e);
		}
	});

export default router;