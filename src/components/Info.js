import React from "react";
import "../resources/info.css";
import Snack from "./Snack";
import coffee from "../images/coffee.png";
import coffee1 from "../images/coffee1.png";
import coffee2 from "../images/coffee2.png";
import coffee3 from "../images/coffee3.png";
import coffee4 from "../images/coffee4.png";
import Button from "@mui/material/Button";
import oliver from '../images/oliver1.jpg'

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
          If you’re looking for free Wi-Fi, good vibes, and amazing coffee... This is the place for you!
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
        <div className="photos">
        <img src={coffee1} alt="" />
        <img src={coffee2} alt="" />
        <img src={coffee3} alt="" />
        <img src={coffee4} alt="" />
        </div>
        <Button variant="contained" size="large" className="mt-3 mb-5">
          Coffee Menu
        </Button>
      </div>
      <div className="review-container pt-4">
        <p>
          "Mugs is the best coffee shop in town. Oliver and his employees are so
          great and the atmosphere is great for meeting your friends, business,
          book clubs, board gaming and more. Forgo the corporate chains and
          enjoy this fantastic small business."<br></br>
          <span>~ Hope Jada Diaz, 5 Star Review</span>
        </p>
      </div>
      <div className="oliver mt-5 mb-5 d-flex flex-column">
        <strong>Oliver Wu</strong> <br />
        <img src={oliver} alt="" className="pb-3"/>
        <em>Audiophile, Explorer, Business owner</em> <br></br>
        <p className="pt-3 oliver-text">
        On the corner of Park Rd
        and Selwyn Ave, Oliver Wu has been hard at work serving the people of
        Charlotte for over 11 years. Though, when you love what you do, time
        never seems to have gone by that quick.<br></br><br></br> As the owner of one of South
        Charlotte's most renowned cafe's, Oliver is up early at 3am or 4am
        depending on the day, energized, and ready to prepare "Mug's Coffee" for
        another day of great coffee, tasty food, and warm memories.<br></br><br></br> A little
        known fact about Oliver is that "Mug's Coffee" is only one of his many
        business ventures. For him, running "Mug's Coffee" is purely for fun.
        Success and incredible service doesn't come easy though. Oliver once
        stated: "When I started Mugs, I was here all the time working 16 hour
        days." which speaks to the level of devotion and pride he takes in
        serving his customers.
        </p>
      </div>
      <footer className="d-flex justify-content-center align-items-center pt-3">
        <div className="business-info">
          <ul className="info">
            <li>Mugs' Coffee</li>
            <li>5126 Park Rd #1d, Charlotte, NC 28209, United States</li>
            <li> Dine-in · Takeaway · No delivery</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Info;
