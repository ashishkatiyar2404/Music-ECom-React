import React from "react";
import "./Navbar.css";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="heading">
          <h1>waveDeal</h1>
        </div>

        <div className="prod__search">
          <input type="search" name="search" placeholder="Search" />
          <FaSearch />
        </div>

        <div className="user__info-links">
          <ul>
            <button className="btn__login login">Login</button>
            <div>
              <Link to="/WishList">
                <FaHeart className="wishList" />
              </Link>
            </div>
            <div>
              <Link to="/CartManagement">
                <FaShoppingCart className="shopping__cart" />
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
