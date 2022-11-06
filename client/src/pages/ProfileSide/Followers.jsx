import { Button, Typography } from "@mui/material";
import { flexbox } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../actions/user";
import Follower from "./Follower";
import Following from "./Following";

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
                {user?.following?.map((item2, id) => (
                  <div>
                    <Follower
                      key={id}
                      follower={item}
                      following={item2}
                      user={user}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        {flag === "following" && (
          <div>
            <div>
              <Typography variant="h5">
                <b> Your Friends:</b>
              </Typography>
            </div>
            {user?.following?.map((item2, id) => (
              <div>
                <Following key={id} following={item2} user={user} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Followers;
