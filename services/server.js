const express = require('express');
const cors = require("cors");
const helmet = require("helmet");

const router = require("../controllers");
const errorHandler = require("../middleware/errorHandlers");

const app = express();

app.use(cors());
app.use(helmet());

app.use(express.json());

app.use('/api', router);

app.use("*", async (req, res) => {
    res.status(404).send({
        ok: false,
        status: 404,
        data: 'not found'
    });
});

app.use(errorHandler);

module.exports = app;