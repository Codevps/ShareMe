import EditRoundedIcon from "@mui/icons-material/EditRounded";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../../../../../constants/actionTypes";
import EditProfileModal1 from "./EditProfileModal1";
const EditProfile1 = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: LOGOUT });
    setUser(null);
    navigate("/");
  };
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
              <b>Personal Info:</b>
            </Typography>
            <IconButton onClick={() => setOpen(true)}>
              <EditRoundedIcon style={{ color: "green" }} />
            </IconButton>
          </div>
          <EditProfileModal1 open={open} setOpen={setOpen} />

          <div
            style={{
              padding: "0 2rem 0 2rem ",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>{user?.result.name}</Typography>
            <Typography>{user?.result.email}</Typography>
            <Typography>{user?.result.contact}</Typography>
          </div>
        </CardContent>
        <CardActions>
          <Typography
            style={{
              color: "red",
              cursor: "pointer",
              margin: "0 7rem 1rem",
              padding: "auto",
              textTransform: "uppercase",
            }}
            onClick={() => {
              logout();
            }}
          >
            <b>Logout</b>
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default EditProfile1;
