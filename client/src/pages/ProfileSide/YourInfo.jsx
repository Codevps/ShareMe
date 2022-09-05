import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cover from "../../img/cover.jpg";
import profile from "../../img/profileImg.jpg";
import Followers from "./Followers";
import FollowersModal from "./FollowersModal.jsx";

const YourInfo = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <Card
        elevation={4}
        style={{
          marginTop: "1rem",
          background: "transparent",
          borderRadius: "7%",
          height: "29rem",
          width: "22rem",
        }}
      >
        <CardMedia
          image={cover}
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
            image={profile}
            style={{
              height: 0,
              paddingTop: "46.25%",
              borderRadius: "50%",
              width: "50%",
              position: "absolute",
              top: "-5.3rem",
            }}
          />
        </div>
        <CardContent>
          <div style={{ marginTop: "4.6rem", textAlign: "center" }}>
            <Typography variant="h5">
              <b>Pratham Sawant</b>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Senior FullStack Developer
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
                borderRight: "1px solid grey",
                paddingRight: "1rem",
              }}
            >
              <Typography variant="h6">
                <b>7899</b>
              </Typography>
              <Typography variant="body1">Followers</Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6">
                <b>91</b>
              </Typography>
              <Typography variant="body1">Following</Typography>
            </div>
          </div>
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
              onClick={() => {
                navigate("/myprofile");
              }}
            >
              <b> My Profile</b>
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Followers />
      {/* ------------------------------------------------------------------- */}
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
          onClick={() => setOpen(true)}
        >
          <b>Show More</b>
        </Typography>
      </div>
      <FollowersModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default YourInfo;
