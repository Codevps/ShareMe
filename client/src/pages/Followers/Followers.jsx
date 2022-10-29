import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers1 } from "../../actions/user";

const Followers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const x = async () => {
    await users?.data.map((item) => console.log(item.name));
  };
  useEffect(() => {
    dispatch(getUsers1());
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <Typography variant="h5" onClick={() => x()}>
          <b> Follow More:</b>
        </Typography>
      </div>
    </div>
  );
};

export default Followers;
