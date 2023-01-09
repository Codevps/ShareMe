import express from "express";
import { createChat, findChat, userChats } from "../controllers/chats.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.post("/", auth, createChat);
router.get("/:userId", auth, userChats);
router.get("/find/:firstId/:secondId", auth, findChat);
export default router;
