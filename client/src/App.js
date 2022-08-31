import React from "react";
import "./App.css";
import Home from "./pages/Home/Home.jsx";

const App = () => {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-10%", right: "0" }}></div>
      <div className="blur" style={{ top: "38%", left: "-7rem" }}></div>
      <Home />
    </div>
  );
};

export default App;
