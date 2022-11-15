import { CircularProgress, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import PostSide from "../PostSide/PostSide";
import ProfileSide from "../ProfileSide/ProfileSide";
import RightSide from "../RightSide/RightSide";
import "./styles.css";
const Home = () => {
  return (
    <Grid container className="Home" spacing={1} style={{ behavior: "smooth" }}>
      <Grid item className="profileSide" xs={12} sm={3} md={3} lg={3}>
        <ProfileSide />
      </Grid>
      <Grid item className="postSide" xs={12} sm={3} md={3} lg={5.7}>
        <div
          style={{
            maxHeight: "calc(100vh)",
            overflowY: "auto",
          }}
        >
          <PostSide />
        </div>
      </Grid>
      <Grid item className="rightSide" xs={12} sm={3} md={3} lg={3}>
        <RightSide />
      </Grid>
    </Grid>
  );
};

export default Home;
