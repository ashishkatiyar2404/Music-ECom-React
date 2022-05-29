import React from "react";
import "./WishList.css";

const WishListCompo = () => {
  return (
    <section>
      <div className="wishlist__container">
        <div className="wishlist__item">
          <img src={{}} alt="piano" />
          {/* <i className="fa-solid fa-heart"></i> */}
          <span>
            Mini Jazzmaster Piano
            {/* {.product name} */}
          </span>
          <span>
            ₹1999
            {/* {.price} */}
          </span>
          <button className="btn__move2cart">Add to cart</button>
          <button className="btn__move2cart">Remove from WishList</button>
        </div>
      </div>
    </section>
  );
};

export default WishListCompo;
