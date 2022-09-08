import mongoose from "mongoose";
// set useremail if user changes his email
const profileSchema = mongoose.Schema({
  profession: { type: String },
  working: { type: String },
  experience: { type: String },
  skills: { type: String },
  technicalSkills: { type: String },
  location: { type: String },
  country: { type: String },
  profilePhoto: { type: String },
  coverPhoto: { type: String },
});
export default mongoose.model("UserProfile", profileSchema);
