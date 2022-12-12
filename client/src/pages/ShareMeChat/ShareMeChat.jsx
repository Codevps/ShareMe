import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../actions/user";
import ChatFace from "./ChatFace";
import MessageFace from "./MessageFace.jsx";

const ShareMeChat = () => {
  const dispatch = useDispatch();
  const profile = JSON.parse(localStorage.getItem("profile"));
  const { user } = useSelector((state) => state.users);
  console.log(user);
  useEffect(() => {
    dispatch(getProfile(profile?.result._id));
  }, []);
  return (
    <Grid
      container
      spacing={2}
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Grid style={{ zIndex: "1300" }} item xs={5} sm={4} md={3.5} lg={2.5}>
        <ChatFace user={user} />
      </Grid>

      <Grid
        item
        style={{ zIndex: "1300", marginLeft: "1rem" }}
        xs={6}
        sm={7}
        md={8}
        lg={9}
      >
        <MessageFace user={user} />
      </Grid>
    </Grid>
  );
};
export default ShareMeChat;
