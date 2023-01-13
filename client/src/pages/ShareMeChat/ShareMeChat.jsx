import { Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getChats } from "../../actions/chats";
import { getProfile } from "../../actions/user";
import LogoSearch from "../LogoSearch/LogoSearch";
import ChatCard from "./ChatCard.jsx";
import MessageFace from "./MessageFace.jsx";

const ShareMeChat = () => {
  const [currentChat, setCurrentChat] = useState(null);
  const dispatch = useDispatch();
  const pond = JSON.parse(localStorage.getItem("profile"));
  const { profile } = useSelector((state) => state.profiles);
  const navigate = useNavigate();
  const { chats } = useSelector((state) => state.chats);

  useEffect(() => {
    dispatch(getProfile(pond?.result._id));
    dispatch(getChats(profile?._id));
  }, [profile]);
  return (
    <Grid
      container
      spacing={2}
      style={{
        height: "97vh",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Grid style={{ zIndex: "1300" }} item xs={5} sm={4} md={3.5} lg={2.5}>
        <div
          style={{
            justifyContent: "center",
            width: "auto",
          }}
        >
          <div>
            <LogoSearch />
          </div>
          <Card style={{ height: "90vh", marginTop: "1rem", zIndex: "4300" }}>
            <Typography
              style={{
                paddingLeft: "1rem",
                marginTop: "1.5rem",
                paddingBottom: "1.1rem",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              <b style={{ fontSize: "2rem" }}>Chats</b>
            </Typography>
            <hr style={{ opacity: "0.6", margin: "0 1rem 0 1rem" }} />
            {chats.map((chat) => (
              <div key={chat?._id}>
                <ChatCard currentUser={profile} data={chat} />
              </div>
            ))}
          </Card>
        </div>{" "}
      </Grid>
      <Grid
        item
        style={{ zIndex: "1300", marginLeft: "1rem" }}
        xs={6}
        sm={7}
        md={8}
        lg={9}
      >
        <MessageFace user={profile} chat={currentChat} />
      </Grid>
    </Grid>
  );
};
export default ShareMeChat;
