import { Card, CardContent, IconButton, Typography } from "@mui/material";
import React from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
const EditProfile = () => {
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
              padding: "2rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">
              <b>Your Info:</b>
            </Typography>
            <IconButton>
              <EditRoundedIcon />
            </IconButton>
          </div>
          <div
            style={{
              padding: "2rem",
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

export default EditProfile;
