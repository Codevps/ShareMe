import React, { useEffect } from "react";
import HeadInfo from "./HeadInfo";
import PostSide from "../../../PostSide/PostSide";
import { getProfile } from "../../../../actions/user";
import { useDispatch, useSelector } from "react-redux";

const Middle = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const profile = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile(user?.result._id));
  }, []);
  return (
    <div>
      <HeadInfo profile={profile?.users} />
      <div style={{ marginTop: "2rem" }}></div>
      <PostSide profile={profile?.users} />
    </div>
  );
};

export default Middle;
