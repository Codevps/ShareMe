import { Button, Grid, Paper, Typography } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../../actions/user";
import { AUTH } from "../../constants/actionTypes";
import Logo from "../../img/logo.png";
import Input from "./Input";
import { GoogleLogin } from "@react-oauth/google";
import "./styles.css";
import axios from "axios";

const SignUp = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const { isLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
    profession: "",
    working: "",
    experience: "",
    skills: "",
    technicalSkills: "",
    location: "",
    country: "",
    education: "",
    degree: "",
    institute: "",
    profilePhoto: "",
    coverPhoto: "",
    followers: "",
    following: "",
    posts: "",
  });
  const [isSignUp, setIsSignUp] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [showPassword, setShowPassword] = useState(false);
  /*------------------------------------------------*/
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signUp(formData, navigate));
      setTimeout(function () {
        navigate("/home");
      }, 1000);
      navigate("/home");
    } else {
      dispatch(signIn(formData, navigate));
      setTimeout(function () {
        navigate("/home");
      }, 1000);
      navigate("/home");
    }
  };

  // const googleSuccess = (res) => {
  //   const result = res?.profileObj;
  //   const token = res?.tokenId;
  //   try {
  //     dispatch({ type: AUTH, data: { result, token } });
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const googleFailure = () => {
  //   console.log("Google Sign In Failed");
  // };
  // const login = useGoogleLogin({
  //   onSuccess: (credentialResponse) => {
  //     try {
  //       console.log(credentialResponse.credential);
  //       var decoded = jwt_decode(credentialResponse.credential);
  //       console.log(decoded);
  //     } catch (err) {
  //       googleFailure();
  //     }
  //   },
  // });

  /*------------------------------------------------*/
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: "1000",
      }}
    >
      <Grid
        container
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "10rem",
        }}
        spacing={3}
      >
        <Grid
          item
          xs={12}
          sm={5}
          md={6}
          lg={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <img src={Logo} alt="ShareMe" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h2" style={{ color: "orange" }}>
              <b>Share Me</b>
            </Typography>
            <Typography variant="body1" style={{ color: "black" }}>
              <b>Explore the ideas throughout the world</b>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={7} md={5} lg={4}>
          <Paper style={{ padding: "1rem", background: "transparent" }}>
            <form onSubmit={handleSubmit}>
              <div style={{ textAlign: "center" }}>
                <Typography variant="h5">
                  <b>{isSignUp ? "Sign Up" : "Sign In"}</b>
                </Typography>
              </div>
              <Grid container style={{ padding: "0.5rem" }}>
                {isSignUp && (
                  <>
                    <Input
                      name="firstName"
                      label="First Name"
                      placeholder="Pratham"
                      half
                      handleChange={handleChange}
                      autoFocus
                    />
                    <Input
                      name="lastName"
                      label="Last Name"
                      placeholder="Sawant"
                      half
                      handleChange={handleChange}
                    />
                    <Input
                      name="contact"
                      label="Contact Number"
                      half
                      handleChange={handleChange}
                    />
                  </>
                )}
                <Input
                  name="email"
                  label="Email"
                  placeholder="codevps07@gmail.com"
                  type="email"
                  half={isSignUp && "half"}
                  handleChange={handleChange}
                />
                <Input
                  name="password"
                  label="Password"
                  placeholder="Password"
                  half={isSignUp && "half"}
                  handleChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={handleShowPassword}
                />
                {isSignUp && (
                  <Input
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    half
                    type="password"
                    handleChange={handleChange}
                  />
                )}
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  style={{
                    color: "white",
                    margin: "0.5rem 0 0.5rem 0",
                    background:
                      "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
                  }}
                  type="submit"
                >
                  Submit
                </Button>
                {/* <button onClick={login}>
                  <i className="fa-brands fa-google"></i>
                  Continue with google
                </button>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse.credential);
                    var decoded = jwt_decode(credentialResponse.credential);
                    console.log(decoded);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                /> */}
                <Button
                  variant="contained"
                  fullWidth
                  style={{
                    color: "black",
                    margin: "0 0 1rem 0",
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                  }}
                  onClick={() => {
                    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
                  }}
                >
                  {isSignUp
                    ? "Already have an account, SignIn"
                    : "Don't have an account, SignUp"}
                </Button>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
