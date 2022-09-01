import { Card, Typography } from "@mui/material";
import React from "react";

const Trends = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Card
        fullWidth
        style={{
          marginTop: "2rem",
          backgroundColor: "transparent",
          borderRadius: "12px",
          border: "1px solid grey",
          padding: "2rem",
          paddingBottom: "2rem",
        }}
        elevation={4}
      >
        <Typography variant="h5" style={{ fontSize: "2rem" }}>
          <b>Trends:</b>
        </Typography>
        {/* map function */}
        <Typography variant="h6" style={{ marginTop: "1rem" }}>
          <b>#React.js</b>
          {/* <br /> */}
          <b
            style={{
              color: "grey",
              fontSize: "0.8rem",
              // position: "relative",
              // top: "-0.8rem",
              paddingLeft: "0.8rem",
            }}
          >
            71k shares
          </b>
        </Typography>
      </Card>{" "}
    </div>
  );
};

export default Trends;
