import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { useWishList } from "../../Context/WishListContext";
import "./ProductCard.css";

export default function ProductCard({ items }) {
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();
  const {
    wishState: { wishList },
    wishDispatch,
  } = useWishList();

  // FOR ITEMS ALREADY IN WISHLIST
  let allReadyWishList = wishList.find((obj) => obj._id === items._id);
  let stored = allReadyWishList ? true : false;

  // FOR ITEMS ALREADY IN CART
  let allReadyCart = cart.find((obj) => obj._id === items._id);
  let cartStored = allReadyCart ? true : false;

  return (
    <>
      <div className="product__card">
        <div className="product__card-img-container">
          <img src={items.image} alt="Guitar" />
        </div>
        <div className="product__info-container">
          <div className="product__info">
            <span className="product__name">{items.title}</span>
          </div>
          <div className="product__info-more">
            <span className="product__verified-name">{items.description}</span>
            <br />
            <span className="product__rating-star">{items.rating} ⭐</span>
            <p>
              <span className="product__old-price">₹{items.price}</span>
            </p>
          </div>
          <div className="product__btn">
            {cartStored ? (
              <Link className="go_to_cart" to="/cartManagement">
                Go To Cart
              </Link>
            ) : (
              <button
                className="add_to_cart"
                onClick={() =>
                  cartDispatch({ type: "ADD_TO_CART", payload: items })
                }
              >
                Add to Cart
              </button>
            )}

            {stored ? (
              <button
                // className="add_to_wishlist"
                // disabled={stored}
                onClick={() =>
                  wishDispatch({ type: "REMOVE_FROM_WISHLIST", payload: items })
                }
              >
                Remove from WL
              </button>
            ) : (
              <button
                // className="add_to_wishlist"
                // disabled={stored}
                onClick={() =>
                  wishDispatch({ type: "ADD_TO_WISHLIST", payload: items })
                }
              >
                Add to WishList
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
