import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  creator: { type: String },
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
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("PostSchema", postSchema);
