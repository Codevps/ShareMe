import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShareModal from "../PostSide/ShareModal.jsx";
import Trends from "./Trends.jsx";

const RightSide = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="RightSide">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: "1rem",
        }}
      >
        <IconButton
          style={{ color: "black", fontSize: "2rem" }}
          onClick={() => navigate("/home")}
        >
          <i class="fa-solid fa-house-user" style={{ color: "#ff5349" }}></i>
        </IconButton>
        <IconButton style={{ color: "black", fontSize: "2rem" }}>
          <i class="fa-solid fa-gear"></i>
        </IconButton>
        <IconButton style={{ color: "black", fontSize: "2rem" }}>
          <QuestionAnswerIcon fontSize="large" />
        </IconButton>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Trends />
        <Button
          variant="contained"
          style={{
            color: "white",
            background: "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
            marginTop: "1rem",
          }}
          onClick={() => setOpen(true)}
        >
          Share
        </Button>
      </div>
      <ShareModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default RightSide;
