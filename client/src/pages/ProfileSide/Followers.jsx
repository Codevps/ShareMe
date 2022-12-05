import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../actions/user";
import Follower from "./Follower";
import Following from "./Following";
import Friends from "./Friends";

const Followers = () => {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState("followers");
  const profile = JSON.parse(localStorage.getItem("profile"));
  const { user } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getProfile(profile?.result._id));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          padding: "1rem",
        }}
      >
        <Button
          onClick={() => setFlag("followers")}
          style={{
            borderColor: "black",
            borderBottom: flag === "followers" && "4px solid black",
          }}
        >
          Followers
        </Button>
        <Button
          onClick={() => setFlag("following")}
          style={{
            borderColor: "black",
            borderBottom: flag === "following" && "4px solid black",
          }}
        >
          Following
        </Button>
        <Button
          onClick={() => setFlag("friends")}
          style={{
            borderColor: "black",
            borderBottom: flag === "friends" && "4px solid black",
          }}
        >
          Friends
        </Button>
      </div>
      <div>
        {flag === "followers" && (
          <div>
            <div>
              <Typography variant="h5">
                <b> Your Followers:</b>
              </Typography>
            </div>
            {user?.followers?.map((item, id) => (
              <div>
                <div>
                  <Follower key={id} follower={item} item={user} />
                </div>
              </div>
            ))}
          </div>
        )}
        {flag === "following" && (
          <div>
            <div>
              <Typography variant="h5">
                <b>Your Following:</b>
              </Typography>
            </div>
            {user?.following?.map((item2, id) => (
              <div>
                <Following key={id} following={item2} user={user} />
              </div>
            ))}
          </div>
        )}
        {flag === "friends" && (
          <div>
            <div>
              <Typography variant="h5">
                <b>Friends:</b>
              </Typography>
            </div>
            {user?.following?.map((item2, id) => (
              <div>
                <Friends key={id} friends={item2} item={user} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Followers;
