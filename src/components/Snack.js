import React from "react";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom'

function Snack() {
  return (
    <>
    <div className="snack-header">
      <h1 className="mt-5">Morning Bites</h1>
      </div>
      <div className="snack-div">
        <div className="d-flex flex-column mt-5">
          <div className="d-flex justify-content-between mb-2">
            <h2>Muffin</h2>
            <h3>$2.50</h3>
          </div>
          <p>
            Choose from Chocolate-Chip, Banana Nut, Pumpkin, Blueberry, and
            more.
          </p>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-between mb-2">
            <h2>Bagel</h2>
            <h3>$2.00</h3>
          </div>
          <p>
            Freshly toasted and ready for your choice of cream cheese or butter.
          </p>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-between mb-2">
            <h2>Panini</h2>
            <h3>$2.50</h3>
          </div>
          <p>
            Eggs, Fresh Bacon, and Cheddar Cheese on a flatbread
            and toasted. (can add or remove as you please, only until 11:00am).
          </p>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-between mb-2">
            <h2>Scone</h2>
            <h3>$2.25</h3>
          </div>
          <p>Chocolate chip, Blueberry, and other flavors!</p>
        </div>
        <Button variant="contained" size="large" className="mt-3 mb-5">
          <Link to="/Menu">Full Menu</Link>
        </Button>
        {/* https://zyro.com/preview/campos?utm_medium=affiliate&utm_source=aff1635&utm_campaign=aff35&transaction_id=102fa3945fcc0ecd63f3d09f3e4e4b */}
      </div>
    </>
  );
}

export default Snack;
