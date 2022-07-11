import React, { createContext, useEffect, useContext, useReducer } from "react";

import wishReducerFunc from "../Reducers/WishListReducer";

const WishListInitialState = {
  wishList: localStorage.getItem("WishList")
    ? JSON.parse(localStorage.getItem("WishList"))
    : [],
  wishListCount: 0,
};

const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishState, wishDispatch] = useReducer(
    wishReducerFunc,
    WishListInitialState
  );

  useEffect(() => {
    localStorage.setItem("WishList", JSON.stringify(wishState.wishList));
  }, [wishState]);

  return (
    <WishListContext.Provider value={{ wishState, wishDispatch }}>
      {children}
    </WishListContext.Provider>
  );
};
const useWishList = () => useContext(WishListContext);
export { WishListProvider, useWishList };
