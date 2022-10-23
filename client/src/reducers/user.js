import {
  AUTH,
  FETCH_PROFILE,
  GET_USERS,
  LOGOUT,
  UPDATE_PROFILE,
} from "../constants/actionTypes";

const user = (state = { authData: [] }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case UPDATE_PROFILE:
      return {
        ...state,
        authData: state.authData.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case FETCH_PROFILE:
      return { ...state, authData: action.payload };
    case GET_USERS:
      return { ...state, authData: action.payload };
    default:
      return state;
  }
};
export default user;
