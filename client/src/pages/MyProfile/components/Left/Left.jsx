import { Typography } from "@mui/material";
import React, { useState } from "react";
import LogoSearch from "../../../LogoSearch/LogoSearch";
import Followers from "../../../ProfileSide/Followers";
import FollowersModal from "../../../ProfileSide/FollowersModal";
import EditProfile from "./EditProfile";

const Left = () => {
  const [open2, setOpen2] = useState(false);

  return (
    <div>
      <LogoSearch />
      <EditProfile />
      <Followers />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          style={{
            color: "orange",
            padding: "1rem",
            fontSize: "1.4rem",
            cursor: "pointer",
          }}
          onClick={() => setOpen2(true)}
        >
          <b>Show More</b>
        </Typography>
      </div>
      <FollowersModal open={open2} setOpen={setOpen2} />
    </div>
  );
};

export default Left;
