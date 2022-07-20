import React from "react";
import WishListCompo from "./WishListCompo";
import "./WishList.css";
import { useWishList } from "../../Context/WishListContext";

const WishList = () => {
  const {
    wishState: { wishList },
  } = useWishList();
  return (
    <>
      {/* <Navbar /> */}
      <div className="heading__container">
        <h2 className="heading__wishlist">My WishList ({wishList.length})</h2>
      </div>
      <div className="wishListCompo">
        {wishList.length > 0 ? (
          <div>
            {wishList.map((items) => (
              <WishListCompo items={items} />
            ))}
          </div>
        ) : (
          <h1>😥Your WishList is Empty! Add Some</h1>
        )}
      </div>
    </>
  );
};

export default WishList;
