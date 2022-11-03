import { combineReducers } from "redux";
import users from "./user";
import profiles from "./profile";
import followers from "./followerprofile";
import posts from "./posts";
export const reducers = combineReducers({ users, posts, profiles, followers });
