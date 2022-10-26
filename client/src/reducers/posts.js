import {
  COMMENT,
  CREATE,
  DELETE,
  FETCH_ALL,
  LIKE,
} from "../constants/actionTypes";

const posts = (state = { posts: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, posts: action.payload.data.data };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case LIKE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === action.payload._id) {
            return action.payload;
          } else {
            return post;
          }
        }),
      };
    default:
      return state;
  }
};
export default posts;
