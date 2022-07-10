import React from "react";
import "./Navbar.css";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useWishList } from "../../Context/WishListContext";
import { useCart } from "../../Context/CartContext";
import { useAuth } from "../../Context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const {
    AuthState: { IsLoggedIn },
    AuthDispatch,
  } = useAuth();

  const {
    wishState: { wishList },
  } = useWishList();

  const {
    cartState: { cart },
  } = useCart();

  return (
    <div>
      <nav className="navbar">
        <div className="heading">
          <Link to="/">
            <h1>waveDeal</h1>
          </Link>
        </div>
        <div className="prod__search">
          <input type="search" name="search" placeholder="Search" />
          <FaSearch />
        </div>

        <div className="user__info-links">
          <ul>
            <div className="dynamic__btn">
              {IsLoggedIn ? (
                <button
                  onClick={() => {
                    AuthDispatch({ type: "LOGOUT" });
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    AuthDispatch({ type: "LOGIN_D" });
                    navigate("/Login");
                  }}
                >
                  Login
                </button>
              )}
            </div>
            <div>
              <Link to="/WishList">
                <FaHeart className="wishList" />
                {wishList.length}
              </Link>
            </div>
            <div>
              <Link to="/CartManagement">
                <FaShoppingCart className="shopping__cart" />
                {cart.length ? cart.length : "0"}
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
