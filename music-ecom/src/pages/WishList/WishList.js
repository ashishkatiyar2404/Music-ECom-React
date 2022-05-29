import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import WishListCompo from "./WishListCompo";

import "./WishList.css";

const WishList = () => {
  return (
    <>
      <Navbar />
      <div className="heading__container">
        <h2 className="heading__wishlist">My WishList</h2>
      </div>
      {<WishListCompo />}
    </>
  );
};

export default WishList;
