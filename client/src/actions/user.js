import * as api from "../api";
import {
  AUTH,
  END_LOADING,
  FETCH_PROFILE,
  FETCH_PROFILE1,
  FETCH_PROFILE2,
  FOLLOW,
  GET_USERS,
  GET_USERS1,
  GET_USERS2,
  REGISTER,
  SAVE,
  START_LOADING,
  UPDATE_PROFILE,
} from "../constants/actionTypes";

export const getProfile = (id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getUserProfile(id);
    dispatch({ type: FETCH_PROFILE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const getProfile1 = (id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getUserProfile(id);
    dispatch({ type: FETCH_PROFILE1, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const getProfile2 = (id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getUserProfile(id);
    dispatch({ type: FETCH_PROFILE2, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    dispatch({ type: END_LOADING });
    navigate(`/home`);
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    dispatch({ type: END_LOADING });
    navigate(`/home`);
  } catch (error) {
    console.log(error);
  }
};

export const updateUserProfile = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.updateUserProfile(id, formData);
    dispatch({ type: UPDATE_PROFILE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const savePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.savePost(id);
    dispatch({ type: SAVE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const followUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.followUser(id);
    dispatch({ type: FOLLOW, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const registerPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.registerPost(id);
    dispatch({ type: REGISTER, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.getUsers();
    dispatch({
      type: GET_USERS,
      payload: { data },
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const getUsers1 = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getUsers();
    dispatch({
      type: GET_USERS1,
      payload: { data },
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const getUsers2 = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getUsers();
    dispatch({
      type: GET_USERS2,
      payload: { data },
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
