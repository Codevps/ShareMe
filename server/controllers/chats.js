import ChatModel from "../models/chatModel.js";
export const createChat = async (req, res) => {
  const newChat = new ChatModel({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const result = await newChat.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const userChats = async (req, res) => {
  try {
    const chat = await ChatModel.find({
      members: { $in: [req.params.userId] },
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const findChat = async (req, res) => {};