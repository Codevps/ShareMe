import {
  COMMENT,
  CREATE,
  DELETE,
  FETCH_ALL,
  LIKE,
  UPDATE,
} from "../constants/actionTypes";

const posts = (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case COMMENT:
      return {};
    case FETCH_ALL:
      return {};
    case LIKE:
      return {};
    case CREATE:
      return {};
    case UPDATE:
      return {};
    case DELETE:
      return {};
    default:
      return state;
  }
};
export default posts;
