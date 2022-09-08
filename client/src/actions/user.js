import * as api from "../api";
import { AUTH, UPDATE } from "../constants/actionTypes";

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

export const updateUserProfile = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateUserProfile(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
