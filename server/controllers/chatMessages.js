import ChatMessage from "../models/chatMessageModel.js";

export const addMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  const message = new ChatMessage({ chatId, senderId, text });
  try {
    const result = await message.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const getMessages = async (req, res) => {
  const { chatId } = req.params;
  try {
    const result = await ChatMessage.find({ chatId });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
