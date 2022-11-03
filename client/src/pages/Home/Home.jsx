import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import PostSide from "../PostSide/PostSide";
import ProfileSide from "../ProfileSide/ProfileSide";
import RightSide from "../RightSide/RightSide";
import "./styles.css";
const Home = () => {
  const { users, user, isLoading } = useSelector((state) => state.users);

  // if (isLoading) {
  //   return <CircularProgress size="7em" />;
  // }
  return (
    <div className="Home">
      <div className="profileSide">
        <ProfileSide />
      </div>
      <div className="postSide">
        <PostSide />
      </div>
      <div className="rightSide">
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
