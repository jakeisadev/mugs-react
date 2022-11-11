import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";
import "../resources/newNavbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);


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
          <Link to="/">
            <a href="/#" target="_blank">
              Home
            </a>
          </Link>
          <Link to="./Menu">
            <a href="/#" target="_blank">
              Menu
            </a>
          </Link>
          <Link to="./Events">
            <a href="/#" target="_blank">
              Events
            </a>
          </Link>
          <Link to="./Contact">
            <a href="/#" target="_blank">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
