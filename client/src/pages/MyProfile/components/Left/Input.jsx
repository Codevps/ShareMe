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
  value,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        required
        variant="outlined"
        label={label}
        fullWidth
        value={value}
        type={type}
        autoFocus={autoFocus}
      />
    </Grid>
  );
};

export default Input;
