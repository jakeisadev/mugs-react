import React from "react";
import coffee from "../images/coffee.png";

function BackgroundMenu() {
  return (
    <>
      <div className="background background-contact d-flex align-items-center justify-content-center flex-column">
        <img src={coffee} alt="" />
        <h1 className="mb-3">Contact</h1>
        <button>Reach out</button>
      </div>
    </>
  );
}

export default BackgroundMenu;