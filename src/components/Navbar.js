import React from "react";
import { AppBar, Toolbar, IconButton, Stack } from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";
import "../resources/navbar.css";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar className="navbar">
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CoffeeIcon className="coffee-icon" />
        </IconButton>
        <Stack direction="row" spacing={2} className="nav-links">
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Events</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
