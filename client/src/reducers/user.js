import {
  AUTH,
  END_LOADING,
  FETCH_PROFILE,
  FOLLOW,
  FOLLOW_BACK,
  GET_USERS,
  LOGOUT,
  REGISTER,
  SAVE,
  START_LOADING,
  UPDATE_PROFILE,
} from "../constants/actionTypes";

const users = (state = { isLoading: true, users: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, users: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, users: null };
    case FOLLOW_BACK:
      return {
        ...state,
        users: state?.users?.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
    case UPDATE_PROFILE || SAVE || REGISTER || FOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
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
