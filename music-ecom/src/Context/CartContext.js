import React, { createContext, useContext, useEffect, useReducer } from "react";
import cartReducerFunc from "../Reducers/CartReducer";

// CART INITIAL STATE
const cartInitialState = {
  cart: localStorage.getItem("CartList")
    ? JSON.parse(localStorage.getItem("CartList"))
    : [],
  cartTotalPrice: 0,
  CartCount: 0,
};

// localStorage.getItem("CartList")
//     ? JSON.parse(localStorage.getItem("CartList"))
//     :

// CONTEXT CREATING
const CartContext = createContext();

// CART FUNCTION
const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(
    cartReducerFunc,
    cartInitialState
  );

  useEffect(() => {
    localStorage.setItem("CartList", JSON.stringify(cartState.cart));
  }, [cartState]);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, useCart };
