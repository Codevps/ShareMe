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
import { getProfile } from "../../../../../actions/user";
const EditProfile1 = ({}) => {
  const profile = useSelector((state) => state.user);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
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
            profile={profile?.authData}
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
              <b>First Name:</b> {profile?.authData.name}
            </Typography>
            <Typography>
              <b>Email:</b> {profile.authData.email}
            </Typography>
            <Typography>
              <b>Contact:</b> {profile.authData.contact}
            </Typography>
            <Typography>
              <b>Town/City</b>: {profile.authData.location}
            </Typography>
            <Typography>
              <b>Country:</b> {profile.authData.country}
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
                <Typography>
                  Profession: {profile.authData.profession}
                </Typography>
                <Typography>Working At: {profile.authData.working}</Typography>
                <Typography>
                  Experience: {profile.authData.experience}
                </Typography>
                <Typography>
                  Skills: useMap function
                  {profile.authData.skills}
                  skills.map::with bullet points in a line
                </Typography>
                <Typography>
                  Skills: useMap function
                  {profile.authData.technicalSkills}
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
                  Education till: {profile.authData.education}
                </Typography>
                {/* could be 11 12 degree med other */}
                {/* if degree then degree in if med then med int if other then specify  */}
                <Typography>Degree in: {profile.authData.degree}</Typography>
                <Typography>
                  Name of Institute: {profile.authData.institute}
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
