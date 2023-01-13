import * as api from "../api/index";
import {
  END_LOADING,
  GET_MESSAGES,
  START_LOADING,
} from "../constants/actionTypes";

export const getMessages = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getMessages(id);
    dispatch({ type: GET_MESSAGES, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const addMessage = () => async (dispatch) => {};
