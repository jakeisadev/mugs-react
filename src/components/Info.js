import React from "react";
import "../resources/info.css";
import Snack from "./Snack";
import coffee from "../images/coffee.png";
import coffee1 from "../images/coffee1.png";
import coffee2 from "../images/coffee2.png";
import coffee3 from "../images/coffee3.png";
import coffee4 from "../images/coffee4.png";
import Button from "@mui/material/Button";

function Info() {
  return (
    <>
      <div className="background d-flex align-items-center justify-content-center flex-column">
        <img src={coffee} alt="" />
        <h1 className="mb-3">Mug's Coffee</h1>
        <button>Call Now</button>
      </div>
      <div className="about d-flex align-items-center">
        <p className="pt-4">
          If you’re looking for a place to have amazing coffee and a relaxing
          atmosphere, this is the place for you.<br></br>
          <span>(We have free WiFi too!)</span>
        </p>
      </div>
      <Snack />
      <div className="coffee-container pt-5">
        <p>
          Mugs is a local, independently owned, coffee shop in the South
          Charlotte/South Park area. Just about everything from our coffee beans
          to our pastries, is from local North Carolina vendors.
        </p>
      </div>
      <div className="coffee-photos d-flex flex-column align-items-center m-5">
        <h1>One Word: Coffee!</h1>
        <img src={coffee1} alt="" />
        <img src={coffee2} alt="" />
        <img src={coffee3} alt="" />
        <img src={coffee4} alt="" />
        <Button variant="contained" size="large" className="mt-3 mb-5">
          What kinds?
        </Button>
      </div>
    </>
  );
}

export default Info;
