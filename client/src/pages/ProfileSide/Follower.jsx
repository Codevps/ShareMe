import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followBackUser, getUsers } from "../../actions/user";
const Follower = ({ follower, following, user }) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const followBack = (id) => {
    dispatch(followBackUser(id));
  };
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {users?.data?.map((user) => (
        <div>
          {user?._id === follower && user?._id !== following && (
            <Card
              style={{
                height: "5rem",
                width: "23rem",
                backgroundColor: "transparent",
                marginTop: "1rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
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
                <Tooltip title="Follow back">
                  <Button
                    variant="contained"
                    style={{
                      color: "white",
                      background:
                        "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
                    }}
                    onClick={() => followBack(user?._id)}
                  >
                    Follow
                  </Button>
                </Tooltip>
              </CardActions>
            </Card>
          )}
        </div>
      ))}
    </div>
  );
};

export default Follower;
