import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="nav__item company__logo">
          wave<strong>Deal</strong>
        </h1>
        <div className="nav__item prod__search">
          <input type="search" name="search" placeholder="Search" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="nav__item user__info-links">
          <ul>
            <li>
              <a href="/authentication/login.html" className="login">
                Login
              </a>
            </li>
            <li>
              <a href="/library/Components/wishlist/wishlist.html">
                <i className="fa-solid fa-heart num">
                  <span>2</span>
                </i>
              </a>
            </li>
            <li>
              <a href="/library/Components/cart/cart.html">
                <i className="fa-solid fa-cart-arrow-down num">
                  <span>3</span>
                </i>
              </a>
            </li>
            <li>
              <a href="/authentication/login.html" className="logout">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
