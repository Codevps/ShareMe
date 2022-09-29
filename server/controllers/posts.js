import express from "express";
import mongoose from "mongoose";
import PostSchema from "../models/posts.js";
const router = express.Router();

export const fetchPosts = async (req, res) => {
  try {
    const posts = await PostSchema.find();
    res.status(200).json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostSchema({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid) {
      res.status(404).send("Invalid Id, Post not found");
    }
    await PostSchema.findByIdAndDelete(id);
    res.status(200).json("post deleted successfully");
  } catch (error) {
    console.log(`Server error:${error}`);
    res.status(400).json({ message: error.message });
  }
};
export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return res.json({ message: "User not authenticated" });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post available with this id,Invalid Id");

  const post = await PostSchema.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    post.likes.push(req.userId);
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }
  const updatedPost = await PostSchema.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.json(updatedPost);
};
export const commentPost = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;
  try {
    const post = await PostSchema.findById(id);
    post.comments.push(value);
    const updatedPost = await PostSchema.findByIdAndUpdate(id, post, {
      new: true,
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
