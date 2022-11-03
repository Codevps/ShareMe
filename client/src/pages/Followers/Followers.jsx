import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, getUsers1 } from "../../actions/user";

const Followers = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const profile = JSON.parse(localStorage.getItem("profile"));
  const followProcess = (id) => {
    dispatch(followUser(id));
  };
  useEffect(() => {
    dispatch(getUsers1());
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <Typography variant="h5">
          <b> Follow More:</b>
        </Typography>
        {users?.data?.map(
          (user) =>
            profile?.result?._id !== user?._id && (
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
                        background:
                          "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
                      }}
                      onClick={() => followProcess(user?._id)}
                    >
                      Follow
                    </Button>
                  </CardActions>
                </Card>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Followers;
