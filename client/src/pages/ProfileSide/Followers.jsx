import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import Follower from "./Follower";

const Followers = ({ user }) => {
  useEffect(() => {}, []);

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <Typography variant="h5">
          <b> Your Followers:</b>
        </Typography>
      </div>
      {user?.followers?.map((item) => (
        <div>
          <Follower item={item} user={user} />
        </div>
      ))}
    </div>
  );
};

export default Followers;
