import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { secret } from "../secret.js";
import mongoose from "mongoose";
import PostSchema from "../models/posts.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) res.status(404).json({ message: "User doesn't exist!" });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secret,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signUp = async (req, res) => {
  const {
    email,
    contact,
    password,
    firstName,
    lastName,
    confirmPassword,
    profession,
    working,
    experience,
    skills,
    technicalSkills,
    location,
    country,
    education,
    degree,
    institute,
    profilePhoto,
    coverPhoto,
    followers,
    following,
    posts,
  } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) res.status(404).json({ message: "User already exist!" });
    if (password !== confirmPassword)
      res.status(400).json({ message: "Passwords don't match" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      contact,
      name: `${firstName} ${lastName}`,
      profession,
      working,
      experience,
      skills,
      technicalSkills,
      location,
      country,
      education,
      degree,
      institute,
      profilePhoto,
      coverPhoto,
      followers,
      following,
      posts,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserProfile = async (req, res) => {
  const { id: _id } = req.params;
  const formData = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No user available with this id,Invalid Id");
  }
  const updatedUserProfile = await User.findByIdAndUpdate(
    _id,
    { ...formData, _id },
    {
      new: true,
    }
  );
  res.json(updatedUserProfile);
};

export const getUserProfile = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const post = await User.findById(_id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getUserProfile1 = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const post = await User.findById(_id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const getUser = async (req, res) => {
//   try {
//     const customer = await User.find();
//     res.status(200).json({ data: customer });
//   } catch (error) {
//     console.log(error);
//     res.status(404).json({ message: error.message });
//   }
// };

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getUsers1 = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const savePost = async (req, res) => {
  const { id: _id } = req.params; //post

  if (!req.userId) return res.json({ message: "User not authenticated" });

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post available with this id,Invalid Id");
  const userId = req.userId;
  const user = await User.findById(userId);
  const index = user.savedPosts.findIndex((id) => id === String(_id));

  if (index === -1) {
    user.savedPosts.push(_id);
  } else {
    user.savedPosts = user.savedPosts.filter((id) => id !== String(_id));
  }
  const updatedPost = await User.findByIdAndUpdate(userId, user, {
    new: true,
  });
  res.json(updatedPost);
};
