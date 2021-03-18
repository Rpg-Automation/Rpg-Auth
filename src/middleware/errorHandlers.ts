import { Request, Response, NextFunction, Errback } from "express";

export default async (error: Errback, req: Request, res: Response, next: NextFunction):
	Promise<Response | NextFunction> => {
	if (error) {
		console.log(error);
		return res.status(500).json({
			ok: false,
			error: error.toString()
		});
	}
	else next();
};