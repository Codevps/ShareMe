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
import React from "react";
import img from "../../../img/postpic1.jpg";
const Post = () => {
  return (
    <div>
      <Card
        style={{
          height: "38rem",
          borderRadius: "3%",
          backgroundColor: "#f5f5f5",
        }}
      >
        <CardMedia
          image={img}
          style={{
            height: "60%",
            width: "auto",
            margin: "1rem",
            borderRadius: "3%",
          }}
        />
        {/* heart,message,share arrow likes:body2 grey comments showcased */}
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
        <CardContent style={{ display: "flex", flexDirection: "row" }}>
          <Typography
            variant="body2"
            style={{ color: "grey", position: "absolute", bottom: "9rem" }}
          >
            23390 Likes
          </Typography>
          {/* comments will be only first or latest 2 */}
          <Typography variant="body1" style={{ color: "grey" }}>
            <b style={{ color: "#263238" }}> Durwank Raorane: </b>
            Hey that's a good post :) add gif and smily faces
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Post;
