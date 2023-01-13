import express from "express";
import { checkAuth } from "../controllers/Auth.js";

const router = express.Router();

router.get("/", checkAuth);

export default router;
