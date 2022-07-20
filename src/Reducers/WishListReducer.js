// import { useCart } from "../Context/CartContext";

// const { cartState } = useCart();

const wishReducerFunc = (wishState, WishAction) => {
  switch (WishAction.type) {
    case "ADD_TO_WISHLIST":
      console.log("ADD_TO_WIHSLIST", WishAction.payload);
      return {
        ...wishState,
        wishList: [WishAction.payload, ...wishState.wishList],
      };

    case "REMOVE_FROM_WISHLIST":
      console.log("REMOVE_FROM_WISHLIST", WishAction.payload);
      return {
        ...wishState,
        wishList: wishState.wishList.filter(
          (movie) => movie._id !== WishAction.payload._id
        ),
      };
    // case "MOVE_TO_WISHLIST":
    //   console.log("MOVE_TO_WISHLIST");
    //   return {
    //     ...wishState,
    //     ...cartState,
    //     wishList: [WishAction.payload, ...wishState.wishList],
    //     cart: cartState.cart.filter(
    //       (movie) => movie._id !== WishAction.payload._id
    //     ),
    //   };

    default:
      return { ...wishState };
  }
};

export default wishReducerFunc;
