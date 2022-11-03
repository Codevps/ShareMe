import express from "express";
import {
  signIn,
  signUp,
  updateUserProfile,
  getUserProfile,
  getUsers,
  savePost,
  registerPost,
  followUser,
} from "../controllers/user.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.patch("/:id", auth, updateUserProfile);
router.get("/profile/:id", auth, getUserProfile);
router.patch("/:id/savePost", auth, savePost);
router.patch("/:id/followUser", auth, followUser);
router.patch("/:id/registerPost", auth, registerPost);
router.get("/", getUsers);
export default router;
