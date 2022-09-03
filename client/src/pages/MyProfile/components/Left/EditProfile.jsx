import EditRoundedIcon from "@mui/icons-material/EditRounded";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import EditProfileModal from "./EditProfileModal";
const EditProfile = () => {
  const [open, setOpen] = useState(false);
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
              <b>Your Info:</b>
            </Typography>
            <IconButton onClick={() => setOpen(true)}>
              <EditRoundedIcon style={{ color: "green" }} />
            </IconButton>
          </div>
          <EditProfileModal open={open} setOpen={setOpen} />

          <div
            style={{
              padding: "0 2rem 0 2rem ",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>Status in RelationShip</Typography>
            <Typography>Lives in Multan</Typography>
            <Typography>Works at Zhc</Typography>
            <Typography>Much More : {"<<MAKE IT LIKE LINKED IN>>"}</Typography>
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
            onClick={() => {}}
          >
            <b>Logout</b>
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default EditProfile;
