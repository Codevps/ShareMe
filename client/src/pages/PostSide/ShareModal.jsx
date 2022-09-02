import React from "react";
import Share from "./Share";
import "./styles.css";

const ShareModal = ({ open, setOpen }) => {
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
      }}
    >
      <div
        className="modalContainer"
        style={{
          padding: "1rem",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          zIndex: "1000",
        }}
      >
        <div style={{ padding: "1rem", position: "relative" }}>
          <Share open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
