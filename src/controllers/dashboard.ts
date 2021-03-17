import express, { NextFunction, Request, Response, Router } from "express";
import passport from "passport";

import "../strategies/dashboardStrat";
import { IJwtPayload } from "../types/jwt";
import Jwt from "../helpers/jwt";
import jwtMiddleware from "../middleware/jwt";
import config from "../helpers/config";

const router: Router = express.Router();
const _pass: any = passport.authenticate("discord", { session: false });

// callback will be dashboard
router.get("/discord/dash", _pass);

router.get("/discord/dash/callback", _pass,
	async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const token = await Jwt.Sign(req.user as IJwtPayload);
			res.cookie("have_a_cookie", "is_for_me");
			res.redirect(`${config.DASHBOARD_ORIGIN}/auth/${token}`);
		} catch (e) {
			next(e);
		}
	});

router.post("/verify", jwtMiddleware,
	async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
		try {
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