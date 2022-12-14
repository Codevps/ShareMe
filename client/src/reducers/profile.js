import {
  END_LOADING,
  FETCH_PROFILE1,
  GET_USERS1,
  START_LOADING,
} from "../constants/actionTypes";

const profiles = (state = { isLoading: true, profiles: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_PROFILE1:
      return { ...state, profile: action.payload };
    case GET_USERS1:
      return { ...state, profiles: action.payload.data };
    default:
      return state;
  }
};
export default profiles;
