import React from "react";
import Share from "./Share";
import "./styles.css";

const ShareModal = ({ open, setOpen }) => {
  if (!open) return null;
  return (
    <div className="overlay">
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
