import React, { useEffect, useRef } from "react";
import { format } from "timeago.js";
const Messages = ({ message, user }) => {
  const scroll = useRef();
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div ref={scroll}>
      <div className={message.senderId === user ? "" : ""}>
        <span>{message?.text}</span>
        <span>{format(message?.createdAt)}</span>
      </div>
    </div>
  );
};

export default Messages;
