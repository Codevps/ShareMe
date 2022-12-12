import { CardMedia, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { useState } from "react";
const MessageFace = ({ user }) => {
  const [show, setShow] = useState(false);
  return (
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
            image={user?.profilePhoto}
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
            <b>{user?.name}</b>
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
    </div>
  );
};

export default MessageFace;
