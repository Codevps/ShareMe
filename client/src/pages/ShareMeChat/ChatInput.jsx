import { Button, TextField } from "@mui/material";
import React from "react";

const ChatInput = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        opacity: "0.7",
      }}
    >
      <TextField style={{}} />
      <Button>Send</Button>
    </div>
  );
};

export default ChatInput;
