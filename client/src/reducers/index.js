import { combineReducers } from "redux";
import user from "./user";
import posts from "./posts";
export const reducers = combineReducers({ user, posts });
