import React from "react";
import { useCart } from "../../Context/CartContext";
import { useWishList } from "../../Context/WishListContext";
// import "./WishList.css";

const WishListCompo = ({ items }) => {
  const { cartDispatch } = useCart();
  const { wishDispatch } = useWishList();

  return (
    <div className="wishlist__container">
      <div className="wishlist__item">
        <div className="img__conatiner">
          <img className="img" src={items.image} alt="piano" />
        </div>
        <span>{items.title}</span>
        <span>{items.price}</span>
        <button
          className="btn__move2cart"
          onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: items })}
        >
          Add to cart
        </button>
        <button
          className="btn__move2cart"
          onClick={() =>
            wishDispatch({ type: "REMOVE_FROM_WISHLIST", payload: items })
          }
        >
          Remove from WishList
        </button>
      </div>
    </div>
  );
};

export default WishListCompo;
