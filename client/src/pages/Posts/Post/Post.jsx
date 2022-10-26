import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import SendIcon from "@mui/icons-material/Send";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likePost } from "../../../actions/posts";
import { getProfile, getProfile1, savePost } from "../../../actions/user";

const Post = ({ post }) => {
  const [saved, setSaved] = useState(false);
  const [comments, setComments] = useState(false);
  const [commentData, setCommentData] = useState("");
  const [likes, setLikes] = useState(post?.likes);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const user1 = useSelector((state) => state.user);
  const userId = user?.result?._id;
  const hasLikedPost = post?.likes?.find((like) => like === userId);
  const profile = useSelector((state) => state.profile);
  const hasSavedPosts = user1?.authData.savedPosts?.find(
    (like) => like === post._id
  );
  const handleSavedPost = () => {
    dispatch(savePost(post._id));
    setSaved((prev) => !prev);
  };
  console.log(commentData);
  const handleComment = () => {};
  const handleLike = async () => {
    dispatch(likePost(post._id));
    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId) ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FavoriteRoundedIcon fontSize="large" />
          &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} Like${likes.length > 1 ? "s" : ""}`}
        </div>
      ) : (
        <>
          <FavoriteBorderRoundedIcon fontSize="large" />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <FavoriteBorderRoundedIcon fontSize="large" />
        &nbsp;Like
      </>
    );
  };
  useEffect(() => {
    dispatch(getProfile1(post?.creator));
    dispatch(getProfile(user?.result._id));
    if (hasSavedPosts) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, []);

  return (
    <div>
      <Card
        style={{
          height: "60rem",
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
              image={profile?.profile.profilePhoto}
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                marginRight: "1rem",
              }}
            />
            <div>
              <Typography variant="h6">
                <b>{profile?.profile.name}</b>
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontFamily: "arial",
                  fontSize: "0.9rem",
                  color: "charcoal",
                }}
              >
                {profile?.profile.profession}
              </Typography>
            </div>
          </div>
          <div
            style={{
              marginLeft: "1rem",
              paddingTop: "0.7rem",
              paddingBottom: "none",
            }}
          >
            <Typography>{post.message}</Typography>
          </div>
        </CardContent>
        <CardMedia
          image={post.photo}
          style={{
            height: "60%",
            width: "auto",
            margin: "1rem",
            marginTop: "-0.5rem",
            borderRadius: "3%",
          }}
        />
        <CardActions
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ marginRight: "1rem" }}>
            <Tooltip title="Like">
              <IconButton
                style={{
                  backgroundColor: "transparent",
                  color: "orange",
                  fontSize: "1rem",
                }}
                disabled={!user?.result}
                onClick={handleLike}
              >
                <Likes />
              </IconButton>
            </Tooltip>
          </div>
          <div style={{ marginRight: "1rem" }}>
            <Tooltip title="Comment">
              <IconButton
                onClick={() => setComments((prev) => !prev)}
                style={{ backgroundColor: "transparent", color: "green" }}
              >
                <i className="fa-regular fa-message"></i>
              </IconButton>
            </Tooltip>
          </div>
          <div style={{ marginRight: "1rem" }}>
            <Tooltip title="Share with friends">
              <IconButton
                style={{ backgroundColor: "transparent", color: "#263238" }}
              >
                <i className="fa-solid fa-paper-plane"></i>
              </IconButton>
            </Tooltip>
          </div>
          <div style={{ marginRight: "1rem" }}>
            <Tooltip title="Save this post">
              <IconButton
                style={{
                  backgroundColor: "transparent",
                  color: "#263238",
                }}
                onClick={() => handleSavedPost()}
              >
                {saved ? (
                  <BookmarkIcon fontSize="large" style={{ color: "orange" }} />
                ) : (
                  <BookmarkBorderIcon
                    fontSize="large"
                    style={{ color: "orange" }}
                  />
                )}
              </IconButton>
            </Tooltip>
          </div>
        </CardActions>
        <CardActions>
          {comments && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <TextField
                fullWidth
                label="Comment on this post"
                multiline="true"
                autoFocus
                variant="outlined"
                name="comment"
                placeholder="Comments"
                onChange={(e) => setCommentData(e.target.value)}
                value={commentData}
              />
              <Tooltip title="Send this message">
                <IconButton onClick={() => handleComment(post._id)}>
                  <SendIcon style={{ color: "green" }} />
                </IconButton>
              </Tooltip>
            </div>
          )}
        </CardActions>
        <CardContent style={{ display: "flex", flexDirection: "column" }}>
          <div>
            Comments:
            <Typography variant="body1" style={{ color: "grey" }}>
              <b style={{ color: "#263238" }}> Durwank Raorane: </b>
              Hey that's a good post :) add gifs
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Post;
