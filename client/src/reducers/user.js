import { AUTH, LOGOUT, UPDATE } from "../constants/actionTypes";

const user = (state = { authData: [] }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case UPDATE:
      return {
        ...state,
        user: state.user.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    default:
      return state;
  }
};
export default user;
