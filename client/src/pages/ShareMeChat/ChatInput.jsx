import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import InputEmoji from "react-input-emoji";

const ChatInput = () => {
  const [newMessage, setNewMessage] = useState("");
  const handleChange = () => {};

  return (
    <div>
      <div>+</div>
      <InputEmoji
        value={newMessage}
        onChange={() => setNewMessage(newMessage)}
      />
      <div>
        <button>send</button>
      </div>
    </div>
  );
};

export default ChatInput;
