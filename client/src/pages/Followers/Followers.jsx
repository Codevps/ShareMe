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
import { followUser, getUsers } from "../../actions/user";

const Followers = () => {
  const dispatch = useDispatch();
  const profile = JSON.parse(localStorage.getItem("profile"));
  const { users } = useSelector((state) => state.users);
  const followProcess = (id) => {
    dispatch(followUser(id));
  };
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

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
          (user, id) =>
            profile?.result?._id !== user?._id && (
              <div key={id}>
                <Card
                  style={{
                    height: "5rem",
                    width: "21rem",
                    backgroundColor: "transparent",
                    marginTop: "1rem",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly ",
                    margin: "auto",
                    padding: "0.2rem",
                  }}
                  elevation={4}
                >
                  <CardMedia
                    image={user?.profilePhoto}
                    style={{
                      height: "0.5rem",
                      width: "0.5rem",
                      borderRadius: "50%",
                      margin: "auto",
                      marginRight: "1.5rem",
                      padding: "1.5rem",
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
