import React from "react";
import SingleCard from "./SingleCard";
import { useCart } from "../../Context/CartContext";
import cartReducerFunc from "../../Reducers/CartReducer";
// import "./SingleCard.css";

const CartManagement = () => {
  const {
    cartState: { cart },
  } = useCart();
  console.log(cart);

  return (
    <>
      {/* <Navbar /> */}
      <div className="heading__container">
        <span className="heading__cart">My Cart</span>
      </div>

      <div>
        {cart.length > 0 ? (
          <div>
            {cart.map((items) => (
              <SingleCard items={items} />
            ))}
          </div>
        ) : (
          <h1>😥Your Cart is Empty! </h1>
        )}
      </div>
      <div className="checkout__container">
        <span>PRICE DETAILS</span>
        <div className="flex">
          <span>
            PRICE of "ttl items"
            {/* {cart.map((items) => (
              <span>{items.price}</span>
            ))} */}
            {cart.map((items) => {
              let totalPrice = +items.price;
              <div>{totalPrice}</div>;
            })}
          </span>
          <span>Total -₹2,200</span>
        </div>
        <div className="flex">
          <span>DISCOUNT</span>
          <span>-₹201</span>
        </div>
        <div className="flex">
          <span>DELIVERY CHARGES</span>
          <span>₹400</span>
        </div>
        <div className="flex">
          <span>TOTAL AMOUNT</span>
          <span>₹2399</span>
        </div>
        <div className="place__order">
          <span>You will save ₹201 on this order</span>
          <button>PLACE ORDER</button>
        </div>
      </div>
    </>
  );
};

export default CartManagement;
