import {
  AUTH,
  FETCH_PROFILE,
  GET_USERS,
  LOGOUT,
  REGISTER,
  SAVE,
  UPDATE_PROFILE,
} from "../constants/actionTypes";

const users = (state = { users: [] }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, users: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, users: null };
    case UPDATE_PROFILE || SAVE || REGISTER:
      return {
        ...state,
        users: state.userss.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
    case FETCH_PROFILE:
      return { ...state, user: action.payload };
    case GET_USERS:
      return { ...state, users: action.payload.data };
    default:
      return state;
  }
};
export default users;
