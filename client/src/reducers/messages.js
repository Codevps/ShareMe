import {
  CREATE_MESSAGES,
  DELETE,
  END_LOADING,
  GET_MESSAGES,
  START_LOADING,
} from "../constants/actionTypes";

const messages = (state = { isLoading: true, messages: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    //change reducers state
    case GET_MESSAGES:
      return { ...state, messages: action.payload };
    case CREATE_MESSAGES:
      return { ...state, messages: [...state.messages, action.payload] };
    case DELETE:
      return {
        ...state,
        messages: state.messages.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};
export default messages;
