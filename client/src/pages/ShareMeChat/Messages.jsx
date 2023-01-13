import React from "react";
import { format } from "timeago.js";
const Messages = ({ message, user }) => {
  return (
    <div>
      <div className={message.senderId === user ? "" : ""}>
        <span>{message?.text}</span>
        <span>{format(message?.createdAt)}</span>
      </div>
    </div>
  );
};

export default Messages;
