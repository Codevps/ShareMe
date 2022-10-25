import express from "express";
import { getUserProfile1 } from "../controllers/user.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.get("/profile/:id", auth, getUserProfile1);
export default router;
