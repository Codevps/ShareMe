import { Grid } from "@mui/material";
import decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../actions/user";
import { LOGOUT } from "../../constants/actionTypes";
import PostSide from "../PostSide/PostSide";
import ProfileSide from "../ProfileSide/ProfileSide";
import RightSide from "../RightSide/RightSide";
import "./styles.css";

const Home = () => {
  const [profile, setProfile] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: LOGOUT });
    setProfile(null);
    navigate("/");
  };
  useEffect(() => {
    dispatch(getProfile(profile?.result._id));
    const token = profile?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
  }, []);
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
