import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../actions/user";
import LogoSearch from "../LogoSearch/LogoSearch";
import YourInfo from "./YourInfo.jsx";

const ProfileSide = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const profile = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile(user?.result._id));
  }, []);
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <YourInfo profile={profile?.authData} />
    </div>
  );
};

export default ProfileSide;
