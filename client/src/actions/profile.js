import * as api from "../api";
import { FETCH_PROFILE } from "../constants/actionTypes";

export const getProfile = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchProfile(id);
    dispatch({ type: FETCH_PROFILE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
