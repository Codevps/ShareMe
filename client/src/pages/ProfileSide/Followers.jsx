import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import profile from "../../img/profileImg.jpg";

const Followers = () => {
  return (
    <div>
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

export default Followers;
