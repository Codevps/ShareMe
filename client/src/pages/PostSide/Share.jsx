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
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../actions/user";
import DatePicker from "react-datepicker";
// import profile from "../../img/profileImg.jpg";
import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { createPost, getPosts } from "../../actions/posts";

const Share = ({ open, setOpen }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const profile = useSelector((state) => state.user);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [image, setImage] = useState(false);
  const [openTitle, setOpenTitle] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [openTags, setOpenTags] = useState(false);
  const [postData, setPostData] = useState({
    name: "",
    photo: "",
    video: "",
    location: "",
    date: "",
    tags: "",
    title: "",
    message: "",
  });
  console.log(posts);
  const setValue = (value) => {
    if (value === "title") {
      setOpenTitle(true);
      setOpenTags(false);
      setOpenMessage(false);
      setOpenLocation(false);
    } else if (value === "tags") {
      setOpenTitle(false);
      setOpenTags(true);
      setOpenMessage(false);
      setOpenLocation(false);
    } else if (value === "message") {
      setOpenTitle(false);
      setOpenTags(false);
      setOpenMessage(true);
      setOpenLocation(false);
    } else if (value === "location") {
      setOpenTitle(false);
      setOpenTags(false);
      setOpenMessage(false);
      setOpenLocation(true);
    }
  };
  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const submit = () => {
    dispatch(createPost({ ...postData, name: user?.result?.name }));
  };
  useEffect(() => {
    dispatch(getProfile(user?.result._id));
    dispatch(getPosts());
  }, []);

  return (
    <div style={{ backgroundColor: "transparent" }}>
      <Card
        style={{
          height: "auto",
          width: "auto",
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "1rem",
        }}
        elevation={4}
      >
        <CardContent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "auto",
                margin: "auto",
              }}
            >
              <CardMedia
                image={profile?.authData.profilePhoto}
                style={{
                  marginLeft: "1rem",
                  height: "4.5rem",
                  width: "4.5rem",
                  borderRadius: "50%",
                }}
              />
              {open && (
                <Button
                  style={{
                    position: "relative",
                    top: "-2rem",
                    color: "grey",
                    left: "34rem",
                  }}
                  onClick={() => setOpen(false)}
                >
                  <CloseIcon />
                </Button>
              )}
              <Button
                onClick={() => setValue("title")}
                style={{
                  borderBottom: openTitle && "3px solid coral",
                  borderRadius: "none",
                  marginLeft: "1.3rem",
                }}
              >
                Title
              </Button>
              <Button
                onClick={() => setValue("tags")}
                style={{
                  borderBottom: openTags && "3px solid coral",
                  borderRadius: "none",
                  marginLeft: "1.3rem",
                }}
              >
                Tags
              </Button>
              <Button
                onClick={() => setValue("message")}
                style={{
                  borderBottom: openMessage && "3px solid coral",
                  borderRadius: "none",
                  marginLeft: "1.3rem",
                }}
              >
                Message
              </Button>
              <Button
                onClick={() => setValue("location")}
                style={{
                  borderBottom: openLocation && "3px solid coral",
                  borderRadius: "none",
                  marginLeft: "1.3rem",
                }}
              >
                Location
              </Button>
            </div>
            {openTitle && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: "1rem",
                  alignItems: "center",
                }}
              >
                <Typography style={{ paddingRight: "1rem" }}>Title:</Typography>
                <TextField
                  autoFocus
                  variant="standard"
                  name="title"
                  placeholder="Title"
                  onChange={handleChange}
                  value={postData.title}
                />
              </div>
            )}
            {openTags && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  paddingLeft: "1rem",
                  alignItems: "center",
                }}
              >
                <Typography style={{ paddingRight: "1rem" }}>Tags:</Typography>
                <TextField
                  autoFocus
                  variant="standard"
                  name="tags"
                  placeholder="Tags"
                  onChange={handleChange}
                  value={postData.tags}
                />
              </div>
            )}
            {openMessage && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  position: "relative",
                  left: "-0.5rem",
                }}
              >
                <Typography style={{ paddingRight: "1rem" }}>
                  Message:
                </Typography>
                <TextField
                  autoFocus
                  variant="standard"
                  name="message"
                  placeholder="Message"
                  multiline={true}
                  onChange={handleChange}
                  value={postData.message}
                  fullWidth
                  sx={{
                    width: { sm: 300 },
                    "& .MuiInputBase-root": {
                      height: 40,
                    },
                  }}
                />
              </div>
            )}
            {openLocation && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  position: "relative",
                  left: "-0.5rem",
                }}
              >
                <Typography
                  style={{
                    paddingRight: "1rem",
                    paddingLeft: "0.2rem",
                    alignItems: "center",
                  }}
                >
                  <AddLocationIcon
                    style={{
                      fontSize: "1.2rem",
                      color: "red",
                      bottom: "-0.2rem",
                      position: "relative",
                    }}
                  />
                  Location:
                </Typography>
                <TextField
                  autoFocus
                  variant="standard"
                  name="location"
                  placeholder="Location"
                  multiline={true}
                  onChange={handleChange}
                  value={postData.location}
                  fullWidth
                  sx={{
                    width: { sm: 300 },
                    "& .MuiInputBase-root": {
                      height: 40,
                    },
                  }}
                />
              </div>
            )}
          </div>
        </CardContent>
        <CardActions>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              opacity: "0.9",
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
                <IconButton
                  style={{ color: "green" }}
                  onClick={() => setImage(true)}
                >
                  <AddAPhotoIcon />
                  <p style={{ fontSize: "1rem", paddingLeft: "0.2rem" }}>
                    Photo
                  </p>
                </IconButton>
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
                  <p style={{ fontSize: "1rem", paddingLeft: "0.2rem" }}>
                    Video
                  </p>
                </IconButton>
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
              <b
                style={{
                  color: "#ffca28",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <IconButton
                  style={{
                    color: "#ffca28",
                    position: "relative",
                  }}
                  onClick={() => setOpenDate((prevOpenDate) => !prevOpenDate)}
                >
                  <CalendarMonthIcon />
                  <p style={{ fontSize: "1rem", paddingLeft: "0.2rem" }}>
                    Schedule
                  </p>
                </IconButton>
                {openDate && (
                  <div>
                    <DatePicker
                      selected={postData.date}
                      onChange={(date) =>
                        setPostData({ ...postData, date: date })
                      }
                    />
                  </div>
                )}
              </b>
            </Typography>
            <Button
              variant="contained"
              style={{
                color: "white",
                background:
                  "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
              }}
              onClick={() => submit()}
            >
              Share
            </Button>
          </div>
        </CardActions>
        <CardContent>
          {image && (
            <div div style={{ display: "flex" }}>
              <div>
                {postData.photo ? (
                  <div style={{ height: "auto" }}>
                    <img
                      style={{
                        position: "relative",
                        width: "auto",
                        maxWidth: "500px",
                        maxHeight: "20rem",
                        height: "auto",
                        borderRadius: "1rem",
                        left: "2rem",
                      }}
                      src={postData.photo}
                      alt="image"
                    />{" "}
                    <Button
                      style={{
                        position: "relative",
                        top: "-18.5rem",
                        right: "-1rem",
                        color: "grey",
                      }}
                      onClick={() => setPostData({ ...postData, photo: "" })}
                    >
                      <CloseIcon />
                    </Button>{" "}
                  </div>
                ) : (
                  <FileBase
                    type="file"
                    multiple={false}
                    value={image}
                    onDone={({ base64 }) =>
                      setPostData({ ...postData, photo: base64 })
                    }
                  />
                )}{" "}
              </div>
              <Button
                style={{
                  position: "relative",
                  top: "-1rem",
                  right: "-9rem",
                  color: "grey",
                }}
                onClick={() => setImage(false)}
              >
                <CloseIcon />
              </Button>{" "}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Share;
