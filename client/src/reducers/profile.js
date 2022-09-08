import {
  CREATE_PROFILE,
  FETCH_PROFILE,
  UPDATE_PROFILE,
} from "../constants/actionTypes";

const profile = (state = { profileData: [] }, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        profileData: state.profileData.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case FETCH_PROFILE:
      return { ...state, profileData: action.payload };
    case CREATE_PROFILE:
      return { ...state, profileData: [...state.profileData, action.payload] };
    default:
      return state;
  }
};
export default profile;
