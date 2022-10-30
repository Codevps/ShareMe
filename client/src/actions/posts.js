import * as api from "../api";
import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  COMMENT,
  LIKE,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";
export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPosts();
    dispatch({
      type: FETCH_ALL,
      payload: { data },
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createPost(post);
    dispatch({
      type: CREATE,
      payload: data,
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.deletePost(id);
    dispatch({ type: DELETE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const likePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.likePost(id);
    dispatch({ type: LIKE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const commentPost = (value, id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.commentPost(value, id);
    dispatch({ type: COMMENT, payload: data });
    dispatch({ type: END_LOADING });
    return data.comments;
  } catch (error) {
    console.log(error);
  }
};
