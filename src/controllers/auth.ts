import express, { NextFunction, Request, Response, Router } from "express";
import passport from "passport";

// this needs to just...exist?
import "../strategies/discord";

const router: Router = express.Router();
const _pass: any = passport.authenticate("discord", { session: false });

router.get("/discord", _pass);

router.get("/discord/callback", _pass,
	async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
		// Authorize success
		try {
			return res.status(200).json({
				ok: true,
				status: 200,
				data: req.user
			});
		} catch (e) {
			next(e);
		}
	});

export default router;