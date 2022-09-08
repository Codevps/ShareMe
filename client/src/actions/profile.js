import * as api from "../api";
import {
  CREATE_PROFILE,
  FETCH_PROFILE,
  UPDATE_PROFILE,
} from "../constants/actionTypes";

export const getProfile = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchProfile(id);
    dispatch({ type: FETCH_PROFILE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createProfile = (profile) => async (dispatch) => {
  try {
    const { data } = await api.createProfile(profile);
    dispatch({ type: CREATE_PROFILE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateProfile = (id, profile) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(id, profile);
    dispatch({ type: UPDATE_PROFILE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
