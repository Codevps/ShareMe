import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField, Tooltip } from "@mui/material";
import React from "react";
import Logo from "../../img/logo.png";
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img src={Logo} alt="ShareMe" />
        <TextField
          style={{ marginLeft: "0.5rem", width: "auto" }}
          placeholder="Pratham"
          name="search"
          label="#Explore"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => {}}>
                  <Tooltip title="Explore People">
                    <SearchIcon style={{ color: "coral", pointer: "hover" }} />
                  </Tooltip>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default LogoSearch;
