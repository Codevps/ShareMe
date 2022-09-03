import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Button, IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShareModal from "../PostSide/ShareModal.jsx";
import Trends from "./Trends.jsx";

const RightSide = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <IconButton
            style={{ color: "black", fontSize: "2rem" }}
            onClick={() => setShow((prevShow) => !prevShow)}
          >
            <i class="fa-solid fa-gear"></i>
          </IconButton>
          {/* <div className="dropdown"> */}
          {show && (
            <Paper
              style={{
                marginTop: "3rem",
                position: "absolute",
                backgroundColor: "#fed8b1",
                opacity: "0.9",
                display: "flex",
                flexDirection: "column",
                padding: "1.5rem",
                zIndex: "1000",
              }}
            >
              <p
                variant="h6"
                style={{ textTransform: "uppercase", color: "black" }}
              >
                <b>Pratham</b>
              </p>
              <Button
                // className={classes.btn}
                variant="contained"
                style={{
                  color: "black",
                  border: "1px solid black",
                  backgroundColor: "transparent",
                  margin: "0.5rem",
                }}
                onClick={() => {}}
              >
                Logout
              </Button>
            </Paper>
          )}
        </div>
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
