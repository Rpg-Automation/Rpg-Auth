import app from "./services/server";
import config from "./helpers/config";

const start = async (): Promise<void> => {
	app.listen(config.PORT, () => {
		console.info(`Worker started under ${config.NODE_ENV} environment`);
		console.info(`Running on Port ${config.PORT}`);
	});
};

start();