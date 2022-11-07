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
    <a href="//github.io/jo_geek" target="_blank">Github</a>
    <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
    <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
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
