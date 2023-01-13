import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { CardMedia, IconButton, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../actions/messages.js";
import { getProfile1 } from "../../actions/user.js";
import ChatInput from "./ChatInput.jsx";
import Messages from "./Messages.jsx";
const MessageFace = ({ user, chat, setSendMessage, receiveMessage }) => {
  const [show, setShow] = useState(false);
  let { messages } = useSelector((state) => state.messages);
  const { profile } = useSelector((state) => state.profiles);
  const dispatch = useDispatch();
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== profile?.id);
    if (chat !== null) dispatch(getProfile1(userId));
  }, [chat, user]);

  useEffect(() => {
    if (chat !== null) dispatch(getMessages(chat?._id));
  }, [chat, messages]);

  useEffect(() => {
    if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
      messages = { ...messages, receiveMessage };
      //work on quickly rendering the message
    }
  }, [receiveMessage]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {chat ? (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderBottom: "1px solid grey",
              paddingBottom: "1rem",
              justifyContent: "space-between",
              maxWidth: "auto",
              minWidth: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CardMedia
                image={profile?.profilePhoto}
                style={{
                  height: "0.5rem",
                  width: "0.5rem",
                  borderRadius: "50%",
                  margin: "auto",
                  marginRight: "0.5rem",
                  marginLeft: "0.5rem",
                  padding: "1rem",
                }}
              />
              <Typography variant="body1" style={{ paddingLeft: "1rem" }}>
                <b>{profile?.name}</b>
              </Typography>
            </div>
            <div>
              <IconButton>
                <MoreVertRoundedIcon
                  style={{ color: "coral", cursor: "pointer" }}
                  onClick={() => setShow((prev) => !prev)}
                />
              </IconButton>
              {show && (
                <Paper
                  style={{
                    position: "absolute",
                    right: "1rem",
                    backgroundColor: "#fed8b1",
                    opacity: "0.9",
                    display: "flex",
                    flexDirection: "column",
                    padding: "0.5rem",
                    zIndex: "1000",
                    width: "8rem",
                    textAlign: "center",
                  }}
                >
                  <div style={{ paddingBottom: "1rem", borderBottom: "1px" }}>
                    Delete Chat
                  </div>
                  <div style={{ paddingBottom: "1rem", borderBottom: "1px" }}>
                    Clear Messages
                  </div>
                  <div style={{ paddingBottom: "1rem", borderBottom: "1px" }}>
                    Pin To Top
                  </div>
                </Paper>
              )}
            </div>
          </div>
          <div>
            {messages.map((message) => (
              <Messages message={message} user={user} />
            ))}
          </div>
          <div style={{ position: "absolute", bottom: "1rem" }}>
            <ChatInput
              user={user}
              chat={chat}
              setSendMessage={setSendMessage}
            />
          </div>
        </div>
      ) : (
        <span>Tap to start conversation</span>
      )}
    </div>
  );
};

export default MessageFace;
