import { CardMedia, Typography } from "@mui/material";
import React from "react";

const MessageFace = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
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
            image={user?.result?.profilePhoto}
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
            <b>{user?.result?.name}</b>
          </Typography>
        </div>
        <div style={{}}>wow</div>
      </div>
    </div>
  );
};

export default MessageFace;
