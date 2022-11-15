import express from "express";
import {
  followBackUser,
  followOtherUser,
  getUserProfile,
  getUsers,
  registerPost,
  savePost,
  signIn,
  signUp,
  updateUserProfile,
} from "../controllers/user.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.patch("/:id", auth, updateUserProfile);
router.get("/profile/:id", auth, getUserProfile);
router.patch("/:id/savePost", auth, savePost);
router.patch("/:id/followOtherUser", auth, followOtherUser);
router.patch("/:id/followBackUser", auth, followBackUser);
router.patch("/:id/registerPost", auth, registerPost);
router.get("/", getUsers);
export default router;
