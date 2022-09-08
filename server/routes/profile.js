import {
  createProfile,
  getProfile,
  updateProfile,
} from "../controllers/profile.js";
import express from "express";
import auth from "../middleware/auth.js";
const router = express.Router();
router.get("/:id", getProfile);
router.post("/", auth, createProfile);
router.patch("/:id", auth, updateProfile);
export default router;
