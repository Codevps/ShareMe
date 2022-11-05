import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../../actions/user";
const HeadInfo = () => {
  const dispatch = useDispatch();
  const profile = JSON.parse(localStorage.getItem("profile"));
  const { user, isLoading } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getProfile(profile?.result._id));
  }, []);

  if (isLoading) {
    return <CircularProgress size="1em" />;
  }
  return (
    <div>
      <Card
        elevation={4}
        style={{
          marginTop: "1rem",
          background: "transparent",
          // borderRadius: "7%",
          height: "auto",
          width: "auto",
          marginRight: "1rem",
        }}
      >
        <CardMedia
          image={user?.coverPhoto}
          style={{
            height: 0,
            paddingTop: "46.25%",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <CardMedia
            image={user?.profilePhoto}
            style={{
              height: "10rem",
              width: "10rem",
              borderRadius: "50%",
              position: "absolute",
              top: "-5.5rem",
              marginBottom: "2rem",
            }}
          />
        </div>

        <CardContent>
          <div style={{ marginTop: "4.6rem", textAlign: "center" }}>
            <Typography variant="h5">
              <b>{user?.name}</b>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user?.profession}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              textAlign: "center",
              borderTop: "1px solid grey",
              borderBottom: "1px solid grey",
              paddingTop: "0.7rem",
              paddingBottom: "0.7rem",
              marginLeft: "2rem",
              marginRight: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6">
                <b>{user?.followers?.length}</b>
              </Typography>
              <Typography variant="body1">Followers</Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderLeft: "1px solid grey",
                borderRight: "1px solid grey",
                paddingLeft: "2rem",
                paddingRight: "2rem",
              }}
            >
              <Typography variant="h6">
                <b>{user?.following?.length}</b>
              </Typography>
              <Typography variant="body1">Following</Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6">
                <b>{user?.postsLength - 1}</b>
              </Typography>
              <Typography variant="body1">Posts</Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeadInfo;
