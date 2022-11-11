import React from "react";
import { IconButton } from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";
import "../resources/newNavbar.css";
import { Link } from 'react-router-dom'

function Navbar() {
  console.log('Coffee Icon:', CoffeeIcon);
  return (
    <>
    <div className="nav">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title">
    <CoffeeIcon className="coffee-icon" />
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <Link to="/"><a href="/#" target="_blank">Home</a></Link>
    <Link to="./Menu"><a href="/#" target="_blank">Menu</a></Link>
    <Link to="./Events"><a href="/#" target="_blank">Events</a></Link>
    <Link to="./Contact"><a href="/#" target="_blank">Contact</a></Link>
  </div>
</div>
      {/* <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

        </div>
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
      </nav>
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
      </nav> */}
    </>
  );
}

export default Navbar;
