import { FETCH_PROFILE1 } from "../constants/actionTypes";

const profile = (state = { profile: [] }, action) => {
  switch (action.type) {
    case FETCH_PROFILE1:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};
export default profile;
