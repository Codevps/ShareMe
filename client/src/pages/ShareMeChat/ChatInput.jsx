import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
import { useDispatch } from "react-redux";
import { addMessage } from "../../actions/messages";

const ChatInput = ({ user, chat, setSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");
  // const { messages } = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      senderId: user,
      text: newMessage,
      chatId: chat?._id,
    };

    dispatch(addMessage(message));
    const receiverId = chat.members.find((id) => id !== user);
    setSendMessage(...message, receiverId);
    setNewMessage("");
  };

  return (
    <div>
      <div>+</div>
      <InputEmoji
        value={newMessage}
        onChange={() => setNewMessage(newMessage)}
      />
      <div>
        <button onClick={handleSend}>send</button>
      </div>
    </div>
  );
};

export default ChatInput;
