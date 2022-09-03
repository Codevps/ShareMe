import { Grid, TextField } from "@mui/material";
import React from "react";
const Input = ({
  half,
  name,
  handleChange,
  label,
  type,
  autoFocus,
  placeholder,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        required
        variant="outlined"
        label={label}
        fullWidth
        type={type}
        autoFocus={autoFocus}
      />
    </Grid>
  );
};

export default Input;
