import { combineReducers } from "redux";
import user from "./user";
import profile from "./profile";
import posts from "./posts";
export const reducers = combineReducers({ user, posts, profile });
