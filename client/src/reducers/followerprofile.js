import {
  END_LOADING,
  FETCH_PROFILE1,
  GET_USERS1,
  START_LOADING,
} from "../constants/actionTypes";

const followers = (state = { isLoading: true, followers: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_PROFILE1:
      return { ...state, follower: action.payload };
    case GET_USERS1:
      return { ...state, followers: action.payload.data };
    default:
      return state;
  }
};
export default followers;
