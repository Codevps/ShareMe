import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
const Input = ({
  half,
  name,
  handleChange,
  label,
  type,
  autoFocus,
  handleShowPassword,
  placeholder,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12} style={{ padding: "0.3rem" }}>
      <TextField
        name={name}
        onChange={handleChange}
        required
        variant="outlined"
        label={label}
        fullWidth
        type={type}
        autoFocus={autoFocus}
        placeholder={placeholder}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
