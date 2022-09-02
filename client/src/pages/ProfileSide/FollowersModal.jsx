import React from "react";
import Followers from "./Followers";
import "./styles.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

const FollowersModal = ({ open, setOpen, setTruth }) => {
  if (!open) return null;
  return (
    <div
      className="overlay"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: "1000",
      }}
    >
      <div
        className="modalContainer"
        style={{
          padding: !open && "1rem",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: "2rem",
        }}
      >
        {open && (
          <Button
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
            }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </Button>
        )}

        <div style={{ padding: "1rem", position: "relative" }}>
          <Followers open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default FollowersModal;
