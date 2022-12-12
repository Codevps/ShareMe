import { CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const ChatCard = ({ user }) => {
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
      <CardContent style={{ padding: "0.2rem" }}>
        <Typography variant="body1">
          <b>{user?.name}</b>
        </Typography>
        <Typography variant="body2">{user?.profession}</Typography>
      </CardContent>
    </div>
  );
};
export default ChatCard;
