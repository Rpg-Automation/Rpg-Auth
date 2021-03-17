import express, { Router } from "express";

import auth from "./auth";
import authDash from "./dashboard";

const router: Router = express.Router();

router.use("/auth", auth);
router.use("/auth", authDash);

export default router;