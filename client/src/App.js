import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import Share from "./pages/PostSide/Share";
import MyProfile from "./pages/MyProfile/MyProfile.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";

const App = () => {
  // const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div className="App">
      <div className="blur" style={{ top: "-10%", right: "0" }}></div>
      <div className="blur" style={{ top: "38%", left: "-7rem" }}></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Navigate to="/home" />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/postShare" exact element={<Share />} />
          <Route path="/myprofile" exact element={<MyProfile />} />
          <Route path="/signup" exact element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
