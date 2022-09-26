import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  user: { type: String },
  photo: { type: String },
  video: { type: String },
  location: { type: String },
  time: { type: String },
  likes: {
    type: [String],
    default: [],
  },
  comments: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  tags: [String],
  title: String,
  message: String,
});

export default mongoose.model("PostSchema", postSchema);
