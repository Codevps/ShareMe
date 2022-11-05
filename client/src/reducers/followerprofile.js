import {
  END_LOADING,
  FETCH_PROFILE2,
  GET_USERS2,
  START_LOADING,
} from "../constants/actionTypes";

const followers = (state = { isLoading: true, followers: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_PROFILE2:
      return { ...state, follower: action.payload };
    case GET_USERS2:
      return { ...state, followers: action.payload.data };
    default:
      return state;
  }
};
export default followers;
