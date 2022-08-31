import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import cover from "../../img/cover.jpg";
import profile from "../../img/profileImg.jpg";
const YourInfo = () => {
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
              style={{ color: "orange", padding: "1rem", fontSize: "1.4rem" }}
              //link here
            >
              <b> My Profile</b>
            </Typography>
          </div>
        </CardContent>
      </Card>
      <div style={{ textAlign: "center", paddingTop: "3rem" }}>
        <Typography variant="h5">
          <b>Your followers</b>
        </Typography>
        {/* put a loop here .map funtion */}
        {/* contains of element */}
        <div>
          <Card
            style={{
              height: "5rem",
              width: "23rem",
              backgroundColor: "transparent",
              marginTop: "1rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly ",
            }}
            elevation={4}
          >
            <CardMedia
              image={profile}
              style={{
                height: "4.5rem",
                width: "4.5rem",
                borderRadius: "50%",
              }}
            />
            <CardContent style={{ padding: "0.2rem" }}>
              <Typography variant="body1">
                <b>Durwank Raorane</b>
              </Typography>
              <Typography variant="body2">Ui/Ux Designer</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                style={{
                  color: "white",
                  background:
                    "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
                }}
              >
                Follow
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default YourInfo;
