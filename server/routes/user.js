import express from "express";
import {
  signIn,
  signUp,
  updateUserProfile,
  getUserProfile,
  getUsers,
} from "../controllers/user.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.patch("/:id", auth, updateUserProfile);
router.get("/profile/:id", auth, getUserProfile);
router.get("/", getUsers);
export default router;
