import { CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const ChatCard = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginRight: "1rem",
        marginLeft: "1rem",
        borderBottom: "1px solid grey",
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
      <CardContent style={{ padding: "0.2rem" }}>
        <Typography variant="body1">
          <b>{user?.result?.name}</b>
        </Typography>
        <Typography variant="body2">{user?.result?.profession}</Typography>
      </CardContent>
    </div>
  );
};
export default ChatCard;
