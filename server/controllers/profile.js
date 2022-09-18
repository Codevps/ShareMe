// import express from "express";
// import mongoose from "mongoose";

// import UserProfile from "../models/profile.js";
// const router = express.Router();

// //send email instead of id.
// export const getProfile = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const post = await UserProfile.findById(id);
//     res.status(200).json(post);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };
// export const createProfile = async (req, res) => {
//   const profile = req.body;
//   const newProfile = new UserProfile({
//     ...profile,
//     creator: req.userId,
//   });
//   try {
//     await newProfile.save();
//     res.status(201).json(newProfile);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };
// export const updateProfile = async (req, res) => {
//   const { id: _id } = req.params;
//   const profile = req.body;
//   if (!mongoose.Types.ObjectId.isValid(_id))
//     return res.status(404).send("No profile available with this id,Invalid Id");
//   const updatedProfile = await UserProfile.findByIdAndUpdate(
//     _id,
//     { ...profile, _id },
//     {
//       new: true,
//     }
//   );
//   res.json(updatedProfile);
// };
