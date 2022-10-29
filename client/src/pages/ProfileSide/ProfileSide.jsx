import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../actions/user";
import LogoSearch from "../LogoSearch/LogoSearch";
import YourInfo from "./YourInfo.jsx";

const ProfileSide = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.users.user);
  // const x = async () => {
  //   console.log(profile);
  // };
  // x();
  console.log(profile);
  useEffect(() => {
    dispatch(getProfile(user?.result._id));
  }, []);
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <YourInfo profile={profile} />
    </div>
  );
};

export default ProfileSide;
