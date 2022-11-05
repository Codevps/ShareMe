import express from "express";
import { getUserProfile2, getUsers2 } from "../controllers/user.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.get("/follower/:id", auth, getUserProfile2);
router.get("/", getUsers2);

export default router;
