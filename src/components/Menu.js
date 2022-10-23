import React from "react";
import BackgroundMenu from "./BackgroundMenu";
import "../resources/menu.css";
import Footer from './Footer'

function Menu() {
  return (
    <>
      <BackgroundMenu />
      <div className="coffee-header">
        <h1 className="pt-3">~ Drinks ~</h1>
      </div>
      <div className="menu-div">
        <div className="menu-responsive-tablet">
          <div className="d-flex flex-column mt-5">
            <div className="d-flex flex-column justify-content-center mb-3 align-items-center">
              <h2>Coffee</h2>
              <p>(Choose size, flavors below)</p>
            </div>
            <ul className="size-list">
              <li>Small: $2.15</li>
              <li>Medium: $2.35</li>
              <li>Large: $2.55</li>
              <li>Small(Iced): $2.65</li>
              <li>Large(Iced): $3.85</li>
              <li className="mt-3">
                <em>
                  ** The above is for regular coffee only.
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
          </div>
          <div className="menu-responsive-tablet">
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
          </div>
          <div className="menu-responsive-tablet">
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
          </div>
          <div className="menu-responsive-tablet">
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
          </div>
          <div className="menu-responsive-tablet">
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
          </div>
          <div className="menu-responsive-tablet">
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
          </div>
          <div className="menu-responsive-tablet">
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
          </div>
          <div className="menu-responsive-tablet">
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
          </div>
          <div className="d-flex flex-column mt-4 font-tablet">
            <div className="d-flex justify-content-center mb-2 mt-4">
              <h2>Nitro</h2>
            </div>
            <ul className="size-list">
              <li className="mb-5">Small(Iced): $5.00</li>
            </ul>
          </div>
          <div className="flavors-header">
            <h1 className="pt-3">~ Flavors ~</h1>
            <p>(Sugar-Free available for + $.55)</p>
          </div>
          <ul className="size-list font-tablet">
            <li>Vanilla</li>
            <li>Caramel</li>
            <li>Hazelnut</li>
            <li>Salted Caramel</li>
            <li>Pumpkin</li>
            <li>Coconut</li>
            <li>Cinnamon</li>
            <li>Brown Sugar Cinnamon</li>
            <li>Mint</li>
            <li>Almond</li>
            <li>Irish Cream</li>
            <li>Lavender</li>
            <li>Seasonal Flavors</li>
          </ul>
        <div className="d-flex flex-column mt-4 extras">
          <div className="extras-header">
            <h1 className="pt-3">~ Extras ~</h1>
          </div>
          <ul className="size-list font-tablet">
            <li>Macha: $1.00</li>
            <li>Espresso Shot: $1.00</li>
            <li>Steamed Milk: $.75</li>
            <li>Milk Subsitute: $.75</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4 extras">
          <div className="extras-header">
            <h1 className="pt-3">~ Milkshakes ~</h1>
            <p>(Small: $4.30 / Large: $4.90)</p>
          </div>
          <ul className="size-list font-tablet">
            <li>Vanilla</li>
            <li>Vanilla Coffee</li>
            <li>Chocolate</li>
            <li>Mocha</li>
            <li>Espresso</li>
            <li>Caramel Coffee</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4 extras">
          <div className="extras-header">
            <h1 className="pt-3">~ Smoothies ~</h1>
            <p>(Ask for flavors)</p>
            <p className="font-tablet">Small: $4.30 / Large: 4.90</p>
          </div>
        </div>
        <div className="d-flex flex-column mt-4 extras">
          <div className="extras-header">
            <h1 className="pt-3">~ Fridge ~</h1>
          </div>
          <ul className="size-list font-tablet">
            <li>Water Bottle: $1.75</li>
            <li>Juice: $1.99</li>
            <li>Soda: $1.85</li>
            <li>Kombucha: $3.75</li>
            <li>Yerba: $3.25</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4 extras">
          <div className="extras-header">
            <h1 className="pt-3">~ Breakfast ~</h1>
          </div>
          <h2 className="mt-4">Breads</h2>
          <ul className="size-list font-tablet">
            <li className="mt-3">Panini: $2.50</li>
            <p>(until 11:00am)</p>
            <br />
            <li>Croissant: $2.25</li>
            <br />
            <li>Bagel: $2.00</li>
            <p>(Ask about flavors)</p>
          </ul>
          <h2 className="mt-4">Fillings</h2>
          <ul className="size-list font-tablet">
            <li className="mt-3">Bacon: $1.00</li>
            <li>Chicken Salad: $3.99</li>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4 extras">
          <div className="extras-header">
            <h1 className="pt-3">~ Lunch ~</h1>
          </div>
          <h2 className="mt-4">Salads</h2>
          <ul className="size-list font-tablet">
            <li className="mt-3">Tuna Salad: $3.99</li>
            <li>Chicken Salad: $3.99</li>
          </ul>
          <h2 className="mt-4">Combos</h2>
          <ul className="size-list font-tablet">
            <li className="mt-3">Combo: $5.99</li>
            <p className="pt-0 mt-3">+ Sandwich</p>
            <p className="pt-0">+ Coffee/Tea/Juice</p>
            <p className="pt-0">+ Chips/Banana/Cookie</p>
          </ul>
        </div>
        <div className="d-flex flex-column mt-4 extras">
          <div className="extras-header">
            <h1 className="pt-3">~ Bakery ~</h1>
          </div>
          <ul className="size-list font-tablet">
            <li className="mt-3">Muffin: $2.50</li>
            <li>Pound Cake: $2.25</li>
            <li>Scone: $2.25</li>
            <li>Cheese Danish: $3.25</li>
            <li>Chocolate Croissant: $2.50</li>
            <li>Cookie: $1.00</li>
            <li>GF Brownie: $3.00</li>
            <li>GF Muffin: $4.00</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
