import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.js";
import profileRouter from "./routes/profile.js";
import { CONNECTION_URL } from "./secret.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/user", userRouter);
app.use("/user/profile", profileRouter);

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
