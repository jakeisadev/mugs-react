import React from "react";
import { IconButton } from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";
import "../resources/navbar.css";

function Navbar() {
  return (
    <>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Info</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
            <a href="https://erikterwan.com/" target="_blank">
              <li>Show me more</li>
            </a>
          </ul>
        </div>
      </nav>
      {/* Navbar type split */}
      <nav className="navbar">
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CoffeeIcon className="coffee-icon" />
        </IconButton>
        <ul className="nav-links mb-0">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
