const app = require("./services/server");
const config = require("./helpers/config");

const start = async () => {
	app.listen(config.PORT, () => {
		console.info(`Worker started under ${config.NODE_ENV} environment`);
		console.info(`Running on Port ${config.PORT}`);
	});
};

start();