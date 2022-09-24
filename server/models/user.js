import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: Number, required: true },
  password: { type: String, required: true },
  profession: { type: String },
  working: { type: String },
  experience: { type: String },
  skills: { type: String },
  technicalSkills: { type: String },
  location: { type: String },
  country: { type: String },
  education: { type: String },
  degree: { type: String },
  institute: { type: String },
  profilePhoto: { type: String },
  coverPhoto: { type: String },
  followers: { type: String },
  following: { type: String },
  posts: { type: String },
});

export default mongoose.model("User", userSchema);
