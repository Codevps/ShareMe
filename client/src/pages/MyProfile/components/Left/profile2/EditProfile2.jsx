import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import EditProfileModal2 from "./EditProfileModal2";
const EditProfile2 = () => {
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
              <b>Professional Info:</b>
            </Typography>
            <IconButton onClick={() => setOpen(true)}>
              <EditRoundedIcon style={{ color: "green" }} />
            </IconButton>
          </div>
          <EditProfileModal2 open={open} setOpen={setOpen} />

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
      </Card>
    </div>
  );
};

export default EditProfile2;
