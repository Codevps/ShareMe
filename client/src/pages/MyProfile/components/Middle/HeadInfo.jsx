import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
const HeadInfo = ({ profile }) => {
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
          image={profile.coverPhoto}
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
            image={profile.profilePhoto}
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
              <b>{profile.name}</b>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {profile.profession}
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
                <b>{profile.followers}</b>
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
                <b>{profile.following}</b>
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
                <b>{profile.posts.length}</b>
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
