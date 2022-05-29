import { createContext } from "react";
import { useContext, useReducer } from "react/cjs/react.production.min";

const demoValue = {
  value: 10,
};

const intialState = {
  products: [],
  cart: [],
  wishList: [],
};

const ProductContext = createContext(demoValue);

function ProductsProvider({ children }) {
  const [intialState, dispatch] = useReducer(ProductReducer, intialState);
  //   useEffect(() => {
  //     ()();
  //   }, [])

  return <ProductContext.Provider>{children}</ProductContext.Provider>;
}

const useProduct = () => useContext(ProductContext);

export { ProductsProvider, useProduct };
