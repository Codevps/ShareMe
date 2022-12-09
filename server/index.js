import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.js";
import postRouter from "./routes/posts.js";
import profileRouter from "./routes/profile.js";
import followerRouter from "./routes/followers.js";
import chatRouter from "./routes/chats.js";
import chatMessagesRouter from "./routes/chatMessages.js";
import { CONNECTION_URL } from "./secret.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/user", userRouter);
app.use("/posts", postRouter);
app.use("/profile", profileRouter);
app.use("/followers", followerRouter);
app.use("/chat", chatRouter);
app.use("/chatMessages", chatMessagesRouter);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: "true",
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running successfully`));
  })
  .catch((e) => console.log(`Server error => ${e}`));
