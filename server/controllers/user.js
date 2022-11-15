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
export const getUserProfile2 = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const post = await User.findById(_id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getUsers2 = async (req, res) => {
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
export const registerPost = async (req, res) => {
  const { id: _id } = req.params; //post

  if (!req.userId) return res.json({ message: "User not authenticated" });

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post available with this id,Invalid Id");
  const userId = req.userId;
  const user = await User.findById(userId);
  const index = user.posts.findIndex((id) => id === String(_id));
  if (index === -1) {
    user.posts.push(_id);
    user.postsLength = user.posts.length + 1;
  } else {
    user.postsLength = user.posts.length;
  }
  const updatedPost = await User.findByIdAndUpdate(userId, user, {
    new: true,
  });
  res.json(updatedPost);
};

export const followOtherUser = async (req, res) => {
  const { id: otherUserId } = req.params; //otheruserID
  if (!req.userId) return res.json({ message: "User not authenticated" });

  if (!mongoose.Types.ObjectId.isValid(otherUserId))
    return res.status(404).send("No user available with this id,Invalid Id");

  //put other's id in following of user
  const userId = req.userId;
  const user = await User.findById(userId);
  const index = user.following.findIndex((id) => id === String(otherUserId));

  if (index === -1) {
    user.following.push(otherUserId);
  } else {
    user.following = user.following.filter((id) => id !== String(otherUserId));
  }
  const updatedPost = await User.findByIdAndUpdate(userId, user, {
    new: true,
  });
  // ----------------------------------------------------------------
  // put user's id in following in other's id
  const otherUser = await User.findById(otherUserId);
  const index2 = otherUser.followers.findIndex((id) => id === String(userId));

  if (index2 === -1) {
    otherUser.followers.push(userId);
  } else {
    otherUser.followers = otherUser.followers.filter(
      (id) => id !== String(userId)
    );
  }
  const updatedPost2 = await User.findByIdAndUpdate(otherUserId, otherUser, {
    new: true,
  });
  // res.json(updatedPost, updatedPost2);
};

export const followBackUser = async (req, res) => {
  const { id: _id } = req.params; //post

  if (!req.userId) return res.json({ message: "User not authenticated" });
  console.log(_id);
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No user available with this id,Invalid Id");
  const userId = req.userId;
  const user = await User.findById(userId);
  const index = user.following.findIndex((id) => id === String(_id));

  if (index === -1) {
    user.following.push(_id);
  } else {
    user.following = user.following.filter((id) => id !== String(_id));
  }
  const updatedPost = await User.findByIdAndUpdate(userId, user, {
    new: true,
  });
  res.json(updatedPost);
};
