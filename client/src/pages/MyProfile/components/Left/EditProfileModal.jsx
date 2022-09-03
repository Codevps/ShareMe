import CloseIcon from "@mui/icons-material/Close";
import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import FileBase from "react-file-base64";
import Input from "./Input";
import "./styles.css";

const EditProfileModal = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          zIndex: "1000",
        }}
      >
        <Button
          style={{
            position: "relative",
            right: "-20rem",
          }}
          onClick={() => setOpen(false)}
        >
          <CloseIcon />
        </Button>
        <Typography variant="h5">
          <b>Update Profile</b>
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} style={{ padding: "1rem" }}>
            <Input
              name="firstName"
              label="First Name"
              placeHolder="Pratham"
              handleChange={handleChange}
              autoFocus
              half
            />
            <Input
              name="lastName"
              label="Last Name"
              placeHolder="Sawant"
              handleChange={handleChange}
              half
            />
            <Input
              name="profession"
              label="Profession"
              placeHolder="Influencer, Model, Developer"
              handleChange={handleChange}
            />
            <Input
              name="location"
              label="Lives in"
              placeHolder="Mumbai,Delhi"
              handleChange={handleChange}
              autoFocus
              half
            />
            <Input
              name="country"
              label="Country"
              placeHolder="India, USA"
              handleChange={handleChange}
              half
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
                    setFormData({ ...formData, selectedFile: base64 })
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
                    setFormData({ ...formData, selectedFile: base64 })
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
  );
};

export default EditProfileModal;
