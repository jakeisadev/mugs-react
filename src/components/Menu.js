import React from "react";
import BackgroundMenu from "./BackgroundMenu";
import "../resources/menu.css";

function Menu() {
  return (
    <>
      <BackgroundMenu />
      <div className="coffee-header">
        <h1 className="mt-5">Drinks</h1>
      </div>
      <div className="menu-div">
        <div className="d-flex flex-column mt-5">
          <div className="d-flex flex-column justify-content-center mb-3 align-items-center">
            <h2>Coffee</h2>
            <h3>(Choose Size)</h3>
          </div>
          <ul className="size-list">
            <li>Small: $2.15</li>
            <li>Medium: $2.35</li>
            <li>Large: $2.55</li>
            <li>Small(Iced): $2.65</li>
            <li>Large(Iced): $3.85</li>
            <li className="mt-3">
              <em>
                ** The above is for regular coffee only, it's{" "}
                <strong>not</strong> generalized pricing.
              </em>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-center mb-2 mt-4">
            <h2>Pour Over</h2>
          </div>
          <ul className="size-list">
            <li>Small: $3.00</li>
            <li>Medium: $3.35</li>
            <li>Large: $3.55</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-center mb-2 mt-4">
            <h2>Milk</h2>
          </div>
          <ul className="size-list">
            <li>Small: $2.80</li>
            <li>Medium: $3.40</li>
            <li>Large: $3.80</li>
            <li>Small(Iced): $3.00</li>
            <li>Large(Iced): $4.00</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-center mb-2 mt-4">
            <h2>Hot Cocoa</h2>
          </div>
          <ul className="size-list">
            <li>Small: $3.00</li>
            <li>Medium: $3.35</li>
            <li>Large: $3.55</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-center mb-2 mt-4">
            <h2>French Press</h2>
          </div>
          <ul className="size-list">
            <li>Large: $4.20</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-center mb-2 mt-4">
            <h2>Chai Latte</h2>
          </div>
          <ul className="size-list">
            <li>Small: $3.00</li>
            <li>Medium: $3.50</li>
            <li>Large: $3.90</li>
            <li>Small(Iced): $3.40</li>
            <li>Large(Iced): $4.40</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-center mb-2 mt-4">
            <h2>Tea</h2>
          </div>
          <ul className="size-list">
            <li>Small: $2.00</li>
            <li>Medium: $2.20</li>
            <li>Large: $2.40</li>
            <li>Small(Iced): $2.25</li>
            <li>Large(Iced): $3.35</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-center mb-2 mt-4">
            <h2>Latte</h2>
          </div>
          <ul className="size-list">
            <li>Small: $3.25</li>
            <li>Medium: $3.60</li>
            <li>Large: $4.00</li>
            <li>Small(Iced): $3.50</li>
            <li>Large(Iced): $4.20</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-center mb-2 mt-4">
            <h2>Mocha</h2>
          </div>
          <ul className="size-list">
            <li>Small: $3.45</li>
            <li>Medium: $3.90</li>
            <li>Large: $4.30</li>
            <li>Small(Iced): $3.75</li>
            <li>Large(Iced): $4.50</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-center mb-2 mt-4">
            <h2>White Mocha</h2>
          </div>
          <ul className="size-list">
            <li>Small: $3.45</li>
            <li>Medium: $3.90</li>
            <li>Large: $4.30</li>
            <li>Small(Iced): $3.75</li>
            <li>Large(Iced): $4.50</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-center mb-2 mt-4">
            <h2>Cappuccino</h2>
          </div>
          <ul className="size-list">
            <li>Small: $3.25</li>
            <li>Medium: $3.70</li>
            <li>Large: $4.10</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-center mb-2 mt-4">
            <h2>Traditional Macchiato</h2>
          </div>
          <ul className="size-list">
            <li>Small: $3.00</li>
            <li>Medium: $3.60</li>
            <li>Large: $4.00</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-center mb-2 mt-4">
            <h2>American Macchiato</h2>
          </div>
          <ul className="size-list">
            <li>Small: $3.00</li>
            <li>Medium: $3.60</li>
            <li>Large: $4.00</li>
            <li>Small(Iced): $3.20</li>
            <li>Large(Iced): $4.20</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-center mb-2 mt-4">
            <h2>Breve</h2>
          </div>
          <ul className="size-list">
            <li>Small: $3.65</li>
            <li>Medium: $3.85</li>
            <li>Large: $4.45</li>
            <li>Small(Iced): $3.45</li>
            <li>Large(Iced): $4.45</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-center mb-2 mt-4">
            <h2>Espresso</h2>
          </div>
          <ul className="size-list">
            <li>Small: $2.15</li>
            <li>Medium: $2.60</li>
            <li>Large: $3.00</li>
            <li>Small(Iced): $2.80</li>
            <li>Large(Iced): $3.80</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-center mb-2 mt-4">
            <h2>Americano</h2>
          </div>
          <ul className="size-list">
            <li>Small: $2.35</li>
            <li>Medium: $2.80</li>
            <li>Large: $3.25</li>
            <li>Small(Iced): $3.25</li>
            <li>Large(Iced): $4.25</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex justify-content-center mb-2 mt-4">
            <h2>Nitro</h2>
          </div>
          <ul className="size-list">
            <li>Small(Iced): $5.00</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menu;
