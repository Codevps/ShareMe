import CloseIcon from "@mui/icons-material/Close";
import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { updateUserProfile, getProfile } from "../../../../../actions/user";
import Input from "../Input";
import "../styles.css";

const EditProfileModal = ({ open, setOpen, currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "",
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
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getProfile(currentId));
    //put email as well to search
    // const newFormData = {
    //   name: `${formData.firstName} ${formData.lastName}`,
    //   email: formData.email,
    //   contact: formData.contact,
    // };
    // console.log(user?.result._id);
    // dispatch(updateUserProfile(user?.result._id, newFormData));
  };
  console.log();

  useEffect(() => {}, []);
  if (!open) return null;

  return (
    <div
      className="overlay"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: "1000",
      }}
    >
      <div
        className="modalContainer"
        style={{
          marginTop: "3rem",
          padding: "1rem 0 1rem 1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          zIndex: "1000",
        }}
      >
        <div
          style={{
            maxHeight: "calc(100vh - 130px)",
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              style={{
                position: "relative",
                right: "-50rem",
              }}
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </Button>
            <Typography
              variant="h5"
              style={{ position: "relative", left: "-3rem" }}
            >
              <b>Update Profile</b>
            </Typography>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <Typography
                variant="h6"
                style={{
                  paddingLeft: "1rem",
                  paddingTop: "1rem",
                  color: "teal",
                }}
              >
                <b>Personal Info</b>:
              </Typography>
              <Grid container spacing={2} style={{ padding: "1rem" }}>
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
                  name="email"
                  label="Email"
                  placeholder="codevps07@gmail.com"
                  type="email"
                  half
                  handleChange={handleChange}
                />
                <Input
                  name="contact"
                  label="Contact Number"
                  half
                  handleChange={handleChange}
                />{" "}
                <Input
                  name="contact"
                  label="Contact Number"
                  half
                  handleChange={handleChange}
                />{" "}
                <Input
                  name="contact"
                  label="Contact Number"
                  half
                  handleChange={handleChange}
                />{" "}
                <Input
                  name="location"
                  label="Town/City"
                  half
                  handleChange={handleChange}
                />{" "}
                <Input
                  name="country"
                  label="Country"
                  half
                  handleChange={handleChange}
                />{" "}
                <Typography
                  variant="h6"
                  style={{
                    paddingLeft: "1rem",
                    paddingTop: "1rem",
                    color: "teal",
                  }}
                >
                  <b>Personal Info</b>:
                </Typography>
                <Input
                  name="profession"
                  label="Profession"
                  handleChange={handleChange}
                />{" "}
                <Input
                  name="working"
                  label="Working At"
                  half
                  handleChange={handleChange}
                />{" "}
                <Input
                  name="experience"
                  label="Experience"
                  half
                  handleChange={handleChange}
                />{" "}
                {/* use Array and mapping technique seperate with , */}
                <Input
                  name="skills"
                  label="Skills"
                  half
                  handleChange={handleChange}
                />{" "}
                {/* use Array and mapping technique seperate with , */}
                <Input
                  name="technicalSkills"
                  label="Technical Skills"
                  half
                  placeholder={"Language or circuits or any other stuff"}
                  handleChange={handleChange}
                />{" "}
                <Typography
                  variant="h6"
                  style={{
                    paddingLeft: "1rem",
                    paddingTop: "1rem",
                    color: "teal",
                  }}
                >
                  <b>Educational Info:</b>:
                </Typography>
                <Input
                  name="education"
                  label="Education:Degree/Course"
                  placeholder={"Engineering, Medic, Arts, Commerce"}
                  handleChange={handleChange}
                />{" "}
                <Input
                  name="degree"
                  label="Name of Degree "
                  handleChange={handleChange}
                />{" "}
                <Input
                  name="institute"
                  label="Name of Institute"
                  handleChange={handleChange}
                />{" "}
                <div
                  style={{
                    padding: "auto",
                    margin: "1rem",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1">Profile Photo: </Typography>
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) =>
                        setFormData({ ...formData, profilePhoto: base64 })
                      }
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1">Cover Photo: </Typography>
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) =>
                        setFormData({ ...formData, coverPhoto: base64 })
                      }
                    />
                  </div>
                </div>
                <Grid xs={6} style={{ padding: "1rem 0 0 1rem" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      color: "white",
                      background:
                        "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
                    }}
                    type="submit"
                    fullWidth
                  >
                    Save
                  </Button>
                </Grid>
                <Grid xs={6} style={{ padding: "1rem 0 0 1rem" }}>
                  <Button
                    variant="contained"
                    style={{ color: "white", background: "black" }}
                    onClick={() => {}}
                    fullWidth
                  >
                    Clear
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
