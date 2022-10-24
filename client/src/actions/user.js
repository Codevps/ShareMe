import * as api from "../api";
import {
  AUTH,
  FETCH_PROFILE,
  GET_USERS,
  SAVE,
  UPDATE_PROFILE,
} from "../constants/actionTypes";

export const getProfile = (id, navigate) => async (dispatch) => {
  try {
    const { data } = await api.getUserProfile(id);
    dispatch({ type: FETCH_PROFILE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    navigate(`/home/`);
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    navigate(`/home`);
  } catch (error) {
    console.log(error);
  }
};

export const updateUserProfile = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.updateUserProfile(id, formData);
    dispatch({ type: UPDATE_PROFILE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const savePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.savePost(id);
    dispatch({ type: SAVE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();
    dispatch({
      type: GET_USERS,
      payload: { data },
    });
  } catch (error) {
    console.log(error);
  }
};
