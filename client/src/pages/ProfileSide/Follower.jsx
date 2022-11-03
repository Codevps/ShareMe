import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getProfile1 } from "../../actions/user";
const Follower = ({ item, user }) => {
  const { follower } = useSelector((state) => state.followers);
  useEffect(() => {
    getProfile1(item);
  }, []);
  console.log(follower?.name);
  return (
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
          image={user?.profilePhoto}
          style={{
            height: "4.5rem",
            width: "4.5rem",
            borderRadius: "50%",
          }}
        />
        <CardContent style={{ padding: "0.2rem" }}>
          <Typography variant="body1">
            <b>{user?.name}</b>
          </Typography>
          <Typography variant="body2">{user?.profession}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            style={{
              color: "white",
              background: "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
            }}
            // onClick={() => followProcess(user?._id)}
          >
            Follow
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Follower;
