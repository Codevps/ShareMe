import { combineReducers } from "redux";
import user from "./user";
import profile from "./profile";
export const reducers = combineReducers({ user, profile });
