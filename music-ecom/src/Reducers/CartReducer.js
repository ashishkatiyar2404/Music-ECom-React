const cartReducerFunc = (cartState, cartAction) => {
  switch (cartAction.type) {
    case "ADD_TO_CART":
      // console.log("ADD_TO_CART", cartAction.payload);
      return {
        ...cartState,
        cart: [cartAction.payload, ...cartState.cart],
      };

    case "REMOVE_FROM_CART":
      // console.log("REMOVE_FROM_CART", cartAction.payload);
      return {
        ...cartState,
        cart: cartState.cart.filter(
          (movie) => movie._id !== cartAction.payload._id
        ),
      };

    default:
      return { ...cartState };
  }
};

export default cartReducerFunc;
