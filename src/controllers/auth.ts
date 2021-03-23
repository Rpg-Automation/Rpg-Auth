import express, { NextFunction, Request, Response, Router } from "express";

// this needs to just...exist?
import { ClientAuth, DashboardAuth } from "../strategies/discord";
import { IJwtPayload } from "../types/jwt";
import Jwt from "../helpers/jwt";

const router: Router = express.Router();

router.get("/discord/client", ClientAuth);

router.get("/discord/client/callback", ClientAuth,
	async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
		// Authorize success
		try {
			const token = await Jwt.Sign(req.user as IJwtPayload);
			return res.status(200).json({
				ok: true,
				status: 200,
				data: {
					user: req.user,
					jwt: token
				}
			});
		} catch (e) {
			next(e);
		}
	});

router.get("/discord/dash", DashboardAuth);

router.get("/discord/dash/callback", DashboardAuth,
	async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const token = await Jwt.Sign(req.user as IJwtPayload);
			res.cookie("token", token, {
				maxAge: 604800000, // 7 days
				httpOnly: true,
				secure: req.secure || req.headers["x-forwarded-proto"] === "https",
				sameSite: true,
				signed: true,
				path: "/"
			});
			res.redirect("/");
		} catch (e) {
			next(e);
		}
	});

router.post("/logout",
	async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
		try {
			res.cookie("token", "", {
				maxAge: 0, // delete instantly
				httpOnly: true,
				secure: req.secure || req.headers["x-forwarded-proto"] === "https",
				sameSite: true,
				signed: true,
				path: "/"
			});
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