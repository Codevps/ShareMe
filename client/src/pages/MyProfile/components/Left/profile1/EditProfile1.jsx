import EditRoundedIcon from "@mui/icons-material/EditRounded";
import {
  Button,
  Card,
  CardActions,
  CardContent,
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
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const profile = useSelector((state) => state.users.user);
  const posts = useSelector((state) => state.posts.posts);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: LOGOUT });
    setUser(null);
    navigate("/");
  };
  const edit = () => {
    setOpen(true);
  };
  useEffect(() => {
    dispatch(getProfile(user?.result._id));
    dispatch(getPosts());
    posts.map(
      (post) =>
        post?.creator === user?.result._id && dispatch(registerPost(post._id))
    );
  }, []);
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
          <EditProfileModal1
            open={open}
            setOpen={setOpen}
            profile={profile?.users}
          />
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
              <b>First Name:</b> {profile?.users.name}
            </Typography>
            <Typography>
              <b>Email:</b> {profile.users.email}
            </Typography>
            <Typography>
              <b>Contact:</b> {profile.users.contact}
            </Typography>
            <Typography>
              <b>Town/City</b>: {profile.users.location}
            </Typography>
            <Typography>
              <b>Country:</b> {profile.users.country}
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
                <Typography>Profession: {profile.users.profession}</Typography>
                <Typography>Working At: {profile.users.working}</Typography>
                <Typography>Experience: {profile.users.experience}</Typography>
                <Typography>
                  Skills: useMap function
                  {profile.users.skills}
                  skills.map::with bullet points in a line
                </Typography>
                <Typography>
                  Skills: useMap function
                  {profile.users.technicalSkills}
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
                <Typography>
                  Education till: {profile.users.education}
                </Typography>
                {/* could be 11 12 degree med other */}
                {/* if degree then degree in if med then med int if other then specify  */}
                <Typography>Degree in: {profile.users.degree}</Typography>
                <Typography>
                  Name of Institute: {profile.users.institute}
                </Typography>
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
                  // logout();
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
