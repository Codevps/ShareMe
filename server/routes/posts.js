import express from "express";
import {
  createPost,
  getPosts,
  commentPost,
  likePost,
  deletePost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.get("/", getPosts);
router.post("/", auth, createPost);
router.post("/:id/commentPost", auth, commentPost);
router.patch("/:id/likePost", auth, likePost);
router.delete("/:id", auth, deletePost);

export default router;
