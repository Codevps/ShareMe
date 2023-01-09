import {
  CREATE_CHATS,
  DELETE,
  END_LOADING,
  FIND_CHATS,
  GET_CHATS,
  START_LOADING,
} from "../constants/actionTypes";

const chats = (state = { isLoading: true, chats: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GET_CHATS:
      return { ...state, chats: action.payload };
    case CREATE_CHATS:
      return { ...state, chats: [...state.chats, action.payload] };
    case FIND_CHATS:
      return { ...state, chats: [...state.chats, action.payload] };
    case DELETE:
      return {
        ...state,
        chats: state.chats.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};
export default chats;
