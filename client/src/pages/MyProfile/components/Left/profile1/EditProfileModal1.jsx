import CloseIcon from "@mui/icons-material/Close";
import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import Input from "../Input";
import "../styles.css";
import { updateUserProfile } from "../../../../../actions/user";

const EditProfileModal = ({ open, setOpen, currentId, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
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
    dispatch(
      updateUserProfile(user?.result._id, {
        ...formData,
        name: `${formData.firstName} ${formData.lastName}`,
      })
    );
  };
  useEffect(() => {
    if (user)
      setFormData({
        ...user?.result,
        firstName: `${user?.result.name.split(" ")[0]}`,
        lastName: `${user?.result.name.split(" ")[1]}`,
      });
  }, []);
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
                  value={formData.firstName}
                  handleChange={handleChange}
                  autoFocus
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  placeholder="Sawant"
                  half
                  handleChange={handleChange}
                  value={formData.lastName}
                />
                <Input
                  name="email"
                  label="Email"
                  placeholder="codevps07@gmail.com"
                  type="email"
                  half
                  handleChange={handleChange}
                  value={formData.email}
                />
                <Input
                  name="contact"
                  label="Contact Number"
                  half
                  handleChange={handleChange}
                  value={formData.contact}
                />
                <Input
                  name="location"
                  label="Town/City"
                  half
                  handleChange={handleChange}
                  value={formData.location}
                />
                <Input
                  name="country"
                  label="Country"
                  half
                  handleChange={handleChange}
                  value={formData.country}
                />
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
                  value={formData.profession}
                />
                <Input
                  name="working"
                  label="Working At"
                  half
                  handleChange={handleChange}
                  value={formData.working}
                />
                <Input
                  name="experience"
                  label="Experience"
                  half
                  handleChange={handleChange}
                  value={formData.experience}
                />
                {/* use Array and mapping technique seperate with , */}
                <Input
                  name="skills"
                  label="Skills"
                  half
                  handleChange={handleChange}
                  value={formData.skills}
                />
                {/* use Array and mapping technique seperate with , */}
                <Input
                  name="technicalSkills"
                  label="Technical Skills"
                  half
                  placeholder={"Language or circuits or any other stuff"}
                  handleChange={handleChange}
                  value={formData.technicalSkills}
                />
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
                  value={formData.education}
                />
                <Input
                  name="degree"
                  label="Name of Degree "
                  handleChange={handleChange}
                  value={formData.degree}
                />
                <Input
                  name="institute"
                  label="Name of Institute"
                  handleChange={handleChange}
                  value={formData.institute}
                />
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
                    onClick={() => setOpen(false)}
                    fullWidth
                  >
                    Cancel
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
