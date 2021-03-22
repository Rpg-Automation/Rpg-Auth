import path from "path";
import { cwd } from "process";
import express, { Express } from "express";
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
	exposedHeaders: ["Authorization", "set-cookie", "Set-Cookie"]
}));
app.use(helmet({
	contentSecurityPolicy: false
}));
app.use(cookieParser(config.COOKIE_SECRET));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(cwd(), "/client/build")));

app.use("/api", router);

app.get("*", (req, res) => {
	res.sendFile(path.join(cwd() + "/client/build/index.html"));
});

app.use(errorHandler);

export default app;