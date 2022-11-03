import EditRoundedIcon from "@mui/icons-material/EditRounded";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../../../../../constants/actionTypes";
import EditProfileModal1 from "./EditProfileModal1";
import { getProfile, registerPost } from "../../../../../actions/user";
import { getPosts } from "../../../../../actions/posts";
const EditProfile1 = ({}) => {
  const [profile, setProfile] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  const { user, isLoading } = useSelector((state) => state.users);
  const posts = useSelector((state) => state.posts.posts);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: LOGOUT });
    setProfile(null);
    navigate("/");
  };
  const edit = () => {
    setOpen(true);
  };
  useEffect(() => {
    dispatch(getProfile(profile?.result._id));
    dispatch(getPosts());
    posts.map(
      (post) =>
        post?.creator === profile?.result._id &&
        dispatch(registerPost(post._id))
    );
  }, []);
  if (isLoading) {
    return <CircularProgress size="7em" />;
  }

  return (
    <div>
      <Card
        elevation={4}
        style={{
          marginTop: "1rem",
          background: "transparent",
          borderRadius: "7%",
          height: "auto",
          width: "21rem",
        }}
      >
        <CardContent>
          <div
            style={{
              padding: "1rem 2rem 1rem 2rem ",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">
              <b>About You:</b>
            </Typography>
            <IconButton onClick={() => edit()}>
              <Tooltip title="Edit your Profile">
                <EditRoundedIcon style={{ color: "green" }} />
              </Tooltip>
            </IconButton>
          </div>
          <EditProfileModal1 open={open} setOpen={setOpen} profile={user} />
          <div
            style={{
              padding: "0 2rem 0 2rem ",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" style={{ color: "teal" }}>
              <b>Personal Info</b>:
            </Typography>
            <Typography>
              <b>First Name:</b> {user?.name}
            </Typography>
            <Typography>
              <b>Email:</b> {user?.email}
            </Typography>
            <Typography>
              <b>Contact:</b> {user?.contact}
            </Typography>
            <Typography>
              <b>Town/City</b>: {user?.location}
            </Typography>
            <Typography>
              <b>Country:</b> {user?.country}
            </Typography>
          </div>
          {show && (
            <>
              <div
                style={{
                  padding: "0 2rem 0 2rem ",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  style={{ paddingTop: "1rem", color: "teal" }}
                >
                  <b>Professional Info</b>:
                </Typography>
                <Typography>Profession: {user?.profession}</Typography>
                <Typography>Working At: {user?.working}</Typography>
                <Typography>Experience: {user?.experience}</Typography>
                <Typography>
                  Skills: useMap function
                  {user?.skills}
                  skills.map::with bullet points in a line
                </Typography>
                <Typography>
                  Skills: useMap function
                  {user?.technicalSkills}
                  technicalSkills.map::with bullet points in a line
                </Typography>
              </div>
              <div
                style={{
                  padding: "0 2rem 0 2rem ",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  style={{ paddingTop: "1rem", color: "teal" }}
                >
                  <b>Educational/Background Info</b>:
                </Typography>
                <Typography>Education till: {user?.education}</Typography>
                <Typography>Degree in: {user?.degree}</Typography>
                <Typography>Name of Institute: {user?.institute}</Typography>
              </div>
            </>
          )}
        </CardContent>
        <CardActions>
          <div>
            <Typography
              variant="body2"
              style={{
                color: "green",
                cursor: "pointer",
                margin: "0 6.4rem 1rem",
                padding: "auto",
                textTransform: "uppercase",
              }}
              onClick={() => {
                setShow((prevSetShow) => !prevSetShow);
              }}
            >
              <b>{!show ? "Show More.." : "Show Less.."}</b>
            </Typography>
            {user && (
              <Button
                style={{
                  color: "tomato",
                  cursor: "pointer",
                  margin: "0 7rem 1rem",
                  padding: "auto",
                  textTransform: "uppercase",
                  border: "1px solid red",
                }}
                onClick={() => {
                  logout();
                }}
              >
                <b>Logout</b>
              </Button>
            )}
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default EditProfile1;
