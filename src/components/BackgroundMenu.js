import React from "react";
import coffee from "../images/coffee.png";

function BackgroundMenu() {
  return (
    <>
      <div className="background background-menu d-flex align-items-center justify-content-center flex-column">
        <img src={coffee} alt="" />
        <h1 className="mb-3">Menu</h1>
        <button>Call Now</button>
      </div>
    </>
  );
}

export default BackgroundMenu;
