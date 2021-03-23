import express, { Router } from "express";

import auth from "./auth";
import dashboard from "./dashboard";

const router: Router = express.Router();

router.use("/auth", auth);
router.use("/dashboard", dashboard);

export default router;