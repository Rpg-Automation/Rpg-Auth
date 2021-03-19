import express, { Request, Response, Express } from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

import router from "../controllers";
import errorHandler from "../middleware/errorHandlers";
import config from "../helpers/config";

const app: Express = express();

app.use(cors({
	allowedHeaders: "*",
	origin: config.DASHBOARD_ORIGIN,
	credentials: true,
	preflightContinue: false,
	exposedHeaders: ["Authorization"]
}));
app.use(helmet());
app.use(cookieParser(config.COOKIE_SECRET));
app.use(express.json());
app.use(express.urlencoded());

app.use("/api", router);

app.use("*", async (req: Request, res: Response): Promise<Response> => {
	return res.status(404).send({
		ok: false,
		status: 404,
		data: "not found"
	});
});
app.use(errorHandler);

export default app;