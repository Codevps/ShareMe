import { CardMedia, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile1 } from "../../../actions/user";

const PostProfileDetails = ({ post }) => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(getProfile1(post?.creator));
  }, []);
  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <CardMedia
          image={profile?.profilePhoto}
          style={{
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            marginRight: "1rem",
          }}
        />
        <div>
          <Typography variant="h6">
            <b>{profile?.name}</b>
          </Typography>
          <Typography
            variant="body2"
            style={{
              fontFamily: "arial",
              fontSize: "0.9rem",
              color: "charcoal",
            }}
          >
            {profile?.profession}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PostProfileDetails;
