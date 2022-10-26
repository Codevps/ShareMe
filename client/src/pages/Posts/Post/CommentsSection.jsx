import SendIcon from "@mui/icons-material/Send";
import {
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { commentPost } from "../../../actions/posts";

const CommentsSection = ({ comments, setComments, post }) => {
  const [commentsData, setCommentsData] = useState(post?.comments);
  const [commentData, setCommentData] = useState("");
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const myRef = useRef();
  const executeScroll = () => {
    myRef.current.scrollIntoView();
  };
  const handleComments = async () => {
    const finalComment = `${user?.result.name}, ${user?.result._id} : ${commentData}`;
    const newComments = await dispatch(commentPost(finalComment, post._id));
    setCommentsData(newComments);
    executeScroll();
    setCommentsData("");
    setCommentData("");
  };
  return (
    <div>
      {" "}
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
              <IconButton
                onClick={() => handleComments()}
                disabled={!commentData}
              >
                <SendIcon style={{ color: "green" }} />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </CardActions>
      <CardContent style={{ display: "flex", flexDirection: "column" }}>
        <div>
          Comments:
          {post?.comments.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              <Tooltip title={c.split(", ")[1].split(": ")[0]}>
                <strong>{c.split(", ")[0]}: </strong>
              </Tooltip>
              {c.split(":")[1]}
            </Typography>
          ))}
          <div ref={myRef} />
        </div>
      </CardContent>
    </div>
  );
};

export default CommentsSection;
