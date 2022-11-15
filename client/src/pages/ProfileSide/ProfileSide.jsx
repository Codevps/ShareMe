import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../actions/user";
import LogoSearch from "../LogoSearch/LogoSearch";
import YourInfo from "./YourInfo.jsx";

const ProfileSide = () => {
  const profile = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getProfile(profile?.result._id));
  }, []);

  return (
    <div className="ProfileSide">
      <LogoSearch />
      <YourInfo profile={user} />
    </div>
  );
};

export default ProfileSide;
