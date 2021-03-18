import express, { Request, Response, Express } from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

import router from "../controllers";
import errorHandler from "../middleware/errorHandlers";
import config from "../helpers/config";

const app: Express = express();
app.set("trust proxy", 1);
app.enable("trust proxy");
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", config.DASHBOARD_ORIGIN);
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(cors({
	//allowedHeaders: "*",
	allowedHeaders: ["Cookie", "Cookies", "cookie", "cookies", "Origin", "Access-Control-Allow-Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token", "Authorization"],
	origin: config.DASHBOARD_ORIGIN,
	credentials: true,
	preflightContinue: false
}));
app.use(helmet());
app.use(cookieParser(config.COOKIE_SECRET));
app.use(express.json());
app.use(express.urlencoded());
app.set("trust proxy", 1);
app.enable("trust proxy");

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