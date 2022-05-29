import React from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../../Context/filterContext";
import "./ProductCard.css";

export default function ProductCard({ items }) {
  // console.log(items.price, typeof items.price);

  return (
    <>
      <div className="product__card">
        <div className="product__card-img-container">
          <img src={items.image} alt="Guitar" />
        </div>
        <div className="product__info-container">
          <div className="product__info">
            <span className="product__name">{items.title}</span>
            {/* <span className="product__add-wishlist">
              <i className="far fa-bookmark"></i>
            </span> */}
          </div>
          <div className="product__info-more">
            <span className="product__verified-name">
              {/* Cort CR230 acoustic Guitar */} {items.description}
            </span>
            <br />
            <span className="product__rating-star">
              {items.rating} star Icon
            </span>
            {/* <span className="product__discount">13% off</span> */}
            <p>
              <span className="product__old-price">₹{items.price}</span>
            </p>
          </div>
          <div className="product__btn">
            <Link to="/">Add to Cart</Link>
          </div>
        </div>
      </div>
    </>
  );
}
