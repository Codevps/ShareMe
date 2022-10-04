import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../actions/user";

const Post = ({ post }) => {
  const profile = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile(post.creator));
  }, []);

  return (
    <div>
      <Card
        style={{
          height: "60rem",
          // maxHeight: "60rem",
          // height: "auto",
          borderRadius: "3%",
          backgroundColor: "#f5f5f5",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CardMedia
              image={profile?.authData.profilePhoto}
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                marginRight: "1rem",
              }}
            />
            <div>
              <Typography variant="h6">
                <b>{profile?.authData.name}</b>
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontFamily: "arial",
                  fontSize: "0.9rem",
                  color: "charcoal",
                }}
              >
                {profile?.authData.profession}
              </Typography>
            </div>
          </div>
          <div style={{ marginLeft: "3rem", paddingTop: "0.5rem" }}>
            <Typography>{post.message}</Typography>
          </div>
        </CardContent>
        <CardMedia
          image={post.photo}
          style={{
            height: "60%",
            width: "auto",
            margin: "1rem",
            marginTop: "none",
            borderRadius: "3%",
          }}
        />
        <CardActions
          style={{
            // display: "flex",
            // flexDirection: "row",
            // justifyContent: "space-evenly",
            fontsize: "3rem",
          }}
        >
          <Tooltip title="Like">
            <IconButton
              style={{
                backgroundColor: "transparent",
                color: "orange",
              }}
            >
              <FavoriteBorderRoundedIcon />
              <FavoriteRoundedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Message">
            <IconButton
              style={{ backgroundColor: "transparent", color: "green" }}
            >
              <i className="fa-regular fa-message"></i>
            </IconButton>
          </Tooltip>
          <Tooltip title="Share with friends">
            <IconButton
              style={{ backgroundColor: "transparent", color: "#263238" }}
            >
              <i className="fa-solid fa-paper-plane"></i>
            </IconButton>
          </Tooltip>
        </CardActions>
        <CardContent style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="body2"
            style={{ color: "red", position: "relative", top: "-1.7rem" }}
          >
            23390
          </Typography>
          {/* comments will be only first or latest 2 */}
          <div>
            Comments:
            <Typography variant="body1" style={{ color: "grey" }}>
              <b style={{ color: "#263238" }}> Durwank Raorane: </b>
              Hey that's a good post :) add gif and smily faces
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Post;
