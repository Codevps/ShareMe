import BookmarkIcon from "@mui/icons-material/Bookmark";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Button, IconButton, Paper, Typography } from "@mui/material";
import decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../../actions/posts";
import { getProfile } from "../../actions/user";
import { LOGOUT } from "../../constants/actionTypes";
import ShareModal from "../PostSide/ShareModal.jsx";
import Trends from "./Trends.jsx";
import Post from "../Posts/Post/Post.jsx";
import Followers from "../Followers/Followers";

const RightSide = () => {
  const { posts } = useSelector((state) => state.posts);
  const [setUp, setSetUp] = useState(false);
  const [profile, setProfile] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  const { user } = useSelector((state) => state.users);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: LOGOUT });
    setProfile(null);
    navigate("/signup");
  };
  useEffect(() => {
    dispatch(getProfile(profile?.result._id));
    dispatch(getPosts());
    const token = profile?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
  }, []);
  return (
    <div className="RightSide">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: "1rem",
        }}
      >
        <IconButton
          style={{ color: "black", fontSize: "2rem" }}
          onClick={() => {
            setSetUp(false) && navigate("/home");
          }}
        >
          <i class="fa-solid fa-house-user" style={{ color: "teal" }}></i>
        </IconButton>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <IconButton
            style={{ color: "black", fontSize: "2rem" }}
            onClick={() => setShow((prevShow) => !prevShow)}
          >
            <i class="fa-solid fa-gear"></i>
          </IconButton>
          {/* <div className="dropdown"> */}
          {show && (
            <Paper
              style={{
                marginTop: "3rem",
                position: "absolute",
                backgroundColor: "#fed8b1",
                opacity: "0.9",
                display: "flex",
                flexDirection: "column",
                padding: "1.5rem",
                zIndex: "1000",
              }}
            >
              <p
                variant="h6"
                style={{ textTransform: "uppercase", color: "black" }}
              >
                {/* <b>{user?.result.name.split(" ")[0]}</b> */}
              </p>
              {user ? (
                <Button
                  // className={classes.btn}
                  variant="contained"
                  style={{
                    color: "black",
                    border: "1px solid black",
                    backgroundColor: "transparent",
                    margin: "0.5rem",
                  }}
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  // className={classes.btn}
                  variant="contained"
                  style={{
                    color: "black",
                    border: "1px solid black",
                    backgroundColor: "transparent",
                    margin: "0.5rem",
                  }}
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Login
                </Button>
              )}
            </Paper>
          )}
        </div>
        <IconButton style={{ color: "coral", fontSize: "2rem" }}>
          <BookmarkIcon
            fontSize="large"
            onClick={() => setSetUp((prev) => !prev)}
          />
        </IconButton>
        <IconButton style={{ color: "black", fontSize: "2rem" }}>
          <QuestionAnswerIcon
            fontSize="large"
            onClick={() => navigate("/chatsApp")}
          />
        </IconButton>
      </div>
      {!setUp && (
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Trends />
            <Button
              variant="contained"
              style={{
                color: "white",
                background:
                  "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
                marginTop: "1rem",
              }}
              onClick={() => setOpen(true)}
            >
              Share
            </Button>
          </div>
          <ShareModal open={open} setOpen={setOpen} />
          <Followers user={user} />
        </div>
      )}
      {setUp && (
        <div style={{ marginTop: "1.5rem" }}>
          <Typography variant="h5" style={{ textAlign: "center" }}>
            <b> Saved Posts:</b>
          </Typography>
          <div
            style={{
              height: "80vh",
              overflowY: "auto",
              scrollbarWidth: "thin",
            }}
          >
            {posts?.map((post) =>
              user?.savedPosts?.map(
                (item) =>
                  post._id === item && (
                    <div>
                      <Post post={post} />
                    </div>
                  )
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSide;
