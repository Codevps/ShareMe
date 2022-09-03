import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import profile from "../../img/profileImg.jpg";
import "./styles.css";
const Share = ({ open, setOpen }) => {
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <Card
        style={{
          height: "auto",
          width: "auto",
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly ",
          marginBottom: "1rem",
        }}
        elevation={4}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CardMedia
              image={profile}
              style={{
                marginLeft: "1rem",
                height: "4.5rem",
                width: "4.5rem",
                borderRadius: "50%",
              }}
            />
            <CardContent>
              <TextField
                placeholder="It's a lovely day"
                style={{ marginLeft: "0.5rem", width: "auto" }}
                name="search"
                label="Write about the post"
              />
            </CardContent>
            {open && (
              <Button
                style={{
                  position: "relative",
                  top: "-1rem",
                  right: "-14rem",
                }}
                onClick={() => setOpen(false)}
              >
                <CloseIcon />
              </Button>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              opacity: "0.8",
            }}
          >
            <CardActions
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Typography
                style={{
                  paddingRight: "2rem",
                  alignItems: "center",
                  display: "flex",
                  color: "green",
                }}
              >
                <b>
                  <IconButton style={{ color: "green" }}>
                    <AddAPhotoIcon />
                  </IconButton>
                  Photo
                </b>
              </Typography>
              <Typography
                style={{
                  paddingRight: "2rem",
                  alignItems: "center",
                  display: "flex",
                  color: "#673ab7",
                }}
              >
                <b>
                  <IconButton style={{ color: "#673ab7" }}>
                    <VideoCameraBackIcon />
                  </IconButton>
                  Video
                </b>
              </Typography>
              <Typography
                style={{
                  paddingRight: "2rem",
                  alignItems: "center",
                  display: "flex",
                  color: "#d81b60",
                }}
              >
                <b>
                  <IconButton style={{ color: "#d81b60" }}>
                    <AddLocationIcon />
                  </IconButton>
                  Location
                </b>
              </Typography>
              <Typography
                style={{
                  paddingRight: "2rem",
                  alignItems: "center",
                  display: "flex",
                  color: "#ffca28",
                }}
              >
                <b>
                  <IconButton style={{ color: "#ffca28" }}>
                    <CalendarMonthIcon />
                  </IconButton>
                  Schedule
                </b>
              </Typography>
              <Button
                variant="contained"
                style={{
                  color: "white",
                  background: "linear-nt(98.63deg, #f9a225 0%, #f95f35 100%)",
                }}
              >
                Share
              </Button>
            </CardActions>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Share;
