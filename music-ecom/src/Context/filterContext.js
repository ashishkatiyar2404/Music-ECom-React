import { createContext, useReducer, useContext } from "react";
import filterReducerFunc from "../Reducers/filterReducer";
// import {filterReducerFunc} from

// initial state
const initialStateOfProduct = {
  categoryName: [],
  price: 11000,
  rating: "",
  sortBy: "",
  includeOutOfStock: true,
};

// creating Context
const FilterContext = createContext();

// wrapping children with Provider
const FilterProvider = ({ children }) => {
  const [filterInitialState, filterInitialDispatch] = useReducer(
    filterReducerFunc,
    initialStateOfProduct
  );
  return (
    <>
      <FilterContext.Provider
        value={{ filterInitialState, filterInitialDispatch }}
      >
        {children}
      </FilterContext.Provider>
    </>
  );
};

const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };
