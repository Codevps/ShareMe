import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import Post from "./Post/Post.jsx";

const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);
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
        //  alignItems: "center"
      }}
    >
      {posts.map((post) => (
        <Grid key={post._id} item>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
