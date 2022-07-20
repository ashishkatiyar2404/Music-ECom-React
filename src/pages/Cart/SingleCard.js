import React from "react";
import { useCart } from "../../Context/CartContext";
import { useWishList } from "../../Context/WishListContext";
import "./SingleCard.css";

const SingleCard = ({ items }) => {
  const {
    // cartState: { cart },
    cartDispatch,
  } = useCart();
  const {
    wishState: { wishList },
    wishDispatch,
  } = useWishList();

  // FOR ITEMS ALREADY IN WISHLIST
  let allReadyWishList = wishList.find((obj) => obj._id === items._id);
  let stored = allReadyWishList ? true : false;

  const moveToWishList = (items) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: items });
    wishDispatch({ type: "ADD_TO_WISHLIST", payload: items });
  };
  return (
    <section className="section">
      <div className="card__quantity">
        {/* <div className="heading__container">
          <span className="heading__cart">My Cart</span>
        </div> */}
        <div className="grid img__horizontal">
          <div className="img__Container">
            <img src={items.image} alt="Horizontal" />
          </div>
          <div className="grid">
            <div className="info">
              <h1>{items.title}</h1>
              <span>{items.description}</span>
              <br />
              <div className="img__rating-price">
                <span className="rating">{items.rating} ⭐</span>
                <p>{items.price}</p>
              </div>
              <div className="quantity__container">
                <label for="">Quantity :- </label>
                <select name="quantity" id="quantity">
                  <option value={1} selected>
                    1
                  </option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
              </div>
              <div className="big__buttons card__link">
                <button
                  className="remove2cart"
                  onClick={() =>
                    cartDispatch({ type: "REMOVE_FROM_CART", payload: items })
                  }
                >
                  Remove From Cart
                </button>
                <button
                  className="move__wishlist"
                  disabled={stored}
                  onClick={() =>
                    // wishDispatch({ type: "MOVE_TO_WISHLIST", payload: items })
                    moveToWishList(items)
                  }
                >
                  Move To Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCard;
