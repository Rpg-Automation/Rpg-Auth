import express, { Request, Response, Express } from "express";
import cors from "cors";
import helmet from "helmet";

import router from "../controllers";
import errorHandler from "../middleware/errorHandlers";

const app: Express = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

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