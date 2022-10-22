import React from "react";
import { IconButton } from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";
import "../resources/navbar.css";
import { Link } from 'react-router-dom'

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
            <a href="/#">
              <li>Home</li>
            </a>
            <a href="/#">
              <li>About</li>
            </a>
            <a href="/#">
              <li>Info</li>
            </a>
            <a href="/#">
              <li>Contact</li>
            </a>
            <a href="/#">
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
            <Link to="/"><a href="/#">Home</a></Link>
          </li>
          <li>
            <Link to="./Menu"><a href="/#">Menu</a></Link>
          </li>
          <li>
          <Link to="./Events"><a href="/#">Events</a></Link>
          </li>
          <li>
            <Link to="./Contact"><a href="/#">Contact</a></Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
