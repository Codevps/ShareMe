import * as api from "../api";
import { AUTH, FETCH_PROFILE, UPDATE_PROFILE } from "../constants/actionTypes";

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
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
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
