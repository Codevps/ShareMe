import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, getProfile2 } from "../../actions/user";
import Follower from "./Follower";

const Followers = () => {
  const dispatch = useDispatch();
  const profile = JSON.parse(localStorage.getItem("profile"));
  const { user } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getProfile(profile?.result._id));
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <Typography variant="h5">
          <b> Your Followers:</b>
        </Typography>
      </div>
      {user?.followers?.map((item, id) => (
        <div>
          <Follower key={id} item={item} user={user} />
        </div>
      ))}
    </div>
  );
};

export default Followers;
