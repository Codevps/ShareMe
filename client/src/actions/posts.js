import * as api from "../api";
import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  COMMENT,
  LIKE,
} from "../constants/actionTypes";
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: FETCH_ALL,
      payload: { data },
    });
  } catch (error) {
    console.log(error);
  }
};
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id);
    dispatch({ type: DELETE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.commentPost(value, id);
    dispatch({ type: COMMENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
