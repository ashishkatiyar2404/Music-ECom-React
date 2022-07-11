import { createContext, useContext, useReducer } from "react";

// intial state is not the final intial state
const intialState = {
  products: [],
  cart: [],
  wishList: [],
};

const ProductContext = createContext(demoValue);

function ProductsProvider({ children }) {
  const [ProductInitialState, dispatchProduct] = useReducer(
    ProductReducerFunc,
    intialState
  );

  return (
    <ProductContext.Provider value={{ ProductInitialState, dispatchProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

const useProduct = () => useContext(ProductContext);

export { ProductsProvider, useProduct };
