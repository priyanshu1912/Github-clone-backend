import express from "express";
import { getRepos } from "../controllers/Repos.js";

const router = express.Router();

router.get("/", getRepos);

export default router;
