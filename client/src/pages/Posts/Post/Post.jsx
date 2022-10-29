import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likePost } from "../../../actions/posts";
import { getProfile, getProfile1, savePost } from "../../../actions/user";
import CommentsSection from "./CommentsSection";
import PostProfileDetails from "./PostProfileDetails";

const Post = ({ post }) => {
  const [saved, setSaved] = useState(false);
  const [comments, setComments] = useState(false);
  const [likes, setLikes] = useState(post?.likes);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const user1 = useSelector((state) => state.users);
  const userId = user?.result?._id;
  const hasLikedPost = post?.likes?.find((like) => like === userId);
  const hasSavedPosts = user1?.users.savedPosts?.find(
    (like) => like === post._id
  );
  const handleSavedPost = () => {
    dispatch(savePost(post._id));
    setSaved((prev) => !prev);
  };
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
          <PostProfileDetails post={post} />
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
        <div>
          <CommentsSection
            comments={comments}
            setComments={setComments}
            post={post}
          />
        </div>
      </Card>
    </div>
  );
};

export default Post;
