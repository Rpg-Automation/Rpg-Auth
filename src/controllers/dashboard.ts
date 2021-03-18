import express, { NextFunction, Request, Response, Router } from "express";
import passport from "passport";

import "../strategies/dashboardStrat";
import { IJwtPayload } from "../types/jwt";
import Jwt from "../helpers/jwt";
import jwtMiddleware from "../middleware/jwtCookie";
import config from "../helpers/config";

const router: Router = express.Router();
const _pass: any = passport.authenticate("discord", { session: false });

// callback will be dashboard
router.get("/discord/dash", _pass);

router.get("/discord/dash/callback", _pass,
	async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const token = await Jwt.Sign(req.user as IJwtPayload);
			res.cookie("token", token, {
				maxAge: 604800000, // 7 days
				httpOnly: true,
				secure: config.IS_PROD,
				sameSite: true,
				signed: true,
				path: "/"
			});
			res.redirect(`${config.DASHBOARD_ORIGIN}`);
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

router.post("/logout",
	async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
		try {
			res.clearCookie("token");
			return res.status(200).json({
				ok: true,
				status: 200,
				data: "cookie removed"
			});
		} catch (e) {
			next(e);
		}
	});

export default router;