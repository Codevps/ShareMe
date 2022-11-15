import { CircularProgress, circularProgressClasses, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import { getUsers } from "../../actions/user";
import Post from "./Post/Post.jsx";

const Posts = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Grid
      container
      alignItems="stretch"
      spacing={3}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {posts?.map(
        (post) =>
          user?.result._id === post?.creator && (
            <Grid key={post._id} item>
              <Post post={post} />
            </Grid>
          )
      )}
      {/* {isLoading && <circularProgressClasses size="1rem" />} */}
    </Grid>
  );
};

export default Posts;
