import { CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile1 } from "../../actions/user";

const ChatCard = ({ currentUser, data }) => {
  const { profile } = useSelector((state) => state.profiles);
  const dispatch = useDispatch();
  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUser?.id);
    dispatch(getProfile1(userId));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginRight: "1rem",
        marginLeft: "1rem",
        borderBottom: "1px solid grey",
      }}
    >
      <CardMedia
        image={profile?.profilePhoto}
        style={{
          height: "0.5rem",
          width: "0.5rem",
          borderRadius: "50%",
          margin: "auto",
          marginRight: "0.5rem",
          marginLeft: "0.5rem",
          padding: "1rem",
        }}
      />
      <CardContent style={{ padding: "0.2rem" }}>
        <Typography variant="body1">
          <b>{profile?.name}</b>
        </Typography>
        <Typography variant="body2">{profile?.profession}</Typography>
      </CardContent>
    </div>
  );
};
export default ChatCard;
