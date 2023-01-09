import * as api from "../api/index";
import {
  END_LOADING,
  GET_CHATS,
  START_LOADING,
} from "../constants/actionTypes";

export const getChats = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.userChats(id);
    dispatch({ type: GET_CHATS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const findChat = (id) => async (dispatch) => {};
export const createChat = (id) => async (dispatch) => {};
