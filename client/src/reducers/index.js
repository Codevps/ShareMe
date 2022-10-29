import { combineReducers } from "redux";
import users from "./user";
import profile from "./profile";
import posts from "./posts";
export const reducers = combineReducers({ users, posts, profile });
